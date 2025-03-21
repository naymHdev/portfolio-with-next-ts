import DashboardBlogCard from "@/components/ui/DashboardBlogCard";
import { TBlog } from "@/lib/models/blogModel";
import { fetchData } from "@/utils/fetchData";
import Link from "next/link";

const BlogsPage = async () => {
  const blogs: TBlog[] | null = await fetchData("/api/blog", {
    next: {
      revalidate: 30,
    },
  });

  if (blogs && blogs.length === 0) {
    return (
      <p className="text-sm font-medium text-secondary text-center mt-20">
        No blogs <span className="mx-1">•</span> found.
      </p>
    );
  }

  return (
    <>
      <section>
        <div>
          <Link href="/dashboard/blogs/create-blog">
            <button className=" custom-bg px-4 py-2 text-white hover:scale-110 duration-300 transition-transform">
              Create Blog
            </button>
          </Link>
        </div>
        <div className=" mt-10">
          {/* <h2 className=" text-2xl font-black text-title">Blogs</h2> */}
          <div className="overflow-auto overflow-y-scroll h-screen overflow-x-hidden no-scrollbar">
            {blogs &&
              blogs.length > 0 &&
              blogs?.map((blog: TBlog) => (
                <DashboardBlogCard key={blog._id} blog={blog} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
