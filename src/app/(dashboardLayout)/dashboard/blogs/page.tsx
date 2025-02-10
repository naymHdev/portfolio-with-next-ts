import Link from "next/link";

const BlogsPage = () => {
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
      </section>
    </>
  );
};

export default BlogsPage;
