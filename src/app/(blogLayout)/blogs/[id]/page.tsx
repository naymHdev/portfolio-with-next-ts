import Container from "@/components/ui/Container";
import NHReactMarkdown from "@/components/ui/ReactMarkdown";
import { TBlog } from "@/lib/models/blogModel";
import { fetchData } from "@/utils/fetchData";
import moment from "moment";
import Image from "next/image";

export interface BlogDetailsProps {
  params: { id: string };
}

 const BlogDetails = async ({ params }: BlogDetailsProps) => {
  const { id } = await params;

  const blogs: TBlog[] | null = await fetchData("/api/blog");

  const blog = blogs?.filter((itm) => itm._id === id);

  // console.log("blog", blog);

  return (
    <div className=" pt-10">
      <Container>
        <div>
          {blog?.map((details) => (
            <div key={details._id} className="w-[90%] lg:w-[70%] mx-auto">
              <h2 className=" text-4xl font-black text-title my-8">
                {details.title}
              </h2>
              <div className=" flex items-center gap-5 mt-6">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <Image
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt={details.title}
                      width={12}
                      height={12}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className=" space-y-2">
                  <h3 className=" text-title font-semibold">Naym Hossen</h3>
                  <p className=" text-sm font-medium text-foreground">
                    Published in{" "}
                    <span>{moment(details.date).format("MMMM D, YYYY")}</span>
                  </p>
                </div>
              </div>
              <div className=" py-10">
                <NHReactMarkdown content={details.content?.slice(0, 500)} />
              </div>
              <div className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px]">
                {details.image && (
                  <Image
                    src={details.image}
                    alt={details.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                )}
              </div>
              <div className=" py-10">
                <NHReactMarkdown content={details.content?.slice(501)} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
