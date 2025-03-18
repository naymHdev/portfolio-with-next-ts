import Container from "@/components/ui/Container";
import NHReactMarkdown from "@/components/ui/ReactMarkdown";
import { TBlog } from "@/lib/models/blogModel";
import { fetchData } from "@/utils/fetchData";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naym Hossen | Blogs",
  description:
    "Discover expert insights on web development, programming, and the latest technology trends. Stay updated with in-depth articles and tutorials.",
};

const BlogsPage = async () => {
  const blogs: TBlog[] | null = await fetchData("/api/blog");

  return (
    <>
      <section>
        <Container>
          <div className=" w-[90%] lg:w-[70%] mx-auto">
            {blogs?.reverse().map((blog) => (
              <div
                key={blog._id}
                className="py-8 flex flex-col items-center md:flex-row justify-between border-b border-[#013f5b] gap-4"
              >
                <div className="flex-1">
                  <Link href={`/blogs/${blog._id}`}>
                    <h2 className="text-2xl font-ubuntu font-semibold text-title hover:text-primaryColor">
                      {blog.title}
                    </h2>
                  </Link>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {moment(blog.date).format("MMMM D, YYYY")}
                  </p>

                  <div className="mt-3 text-foreground">
                    <NHReactMarkdown content={blog.content?.slice(0, 200)} />
                    <span>{blog.content.length > 200 && "..."}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={144}
                    height={96}
                    className="w-full  rounded object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogsPage;
