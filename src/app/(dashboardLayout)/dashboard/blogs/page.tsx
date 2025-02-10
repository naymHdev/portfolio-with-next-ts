import Link from "next/link";

const BlogsPage = async () => {

  // const res = await fetch("http://localhost:3000/api/blogs", {
  //   cache: "no-store",
  // });

  // if (!res.ok) {
  //   console.error("Failed to fetch blogs:", res.statusText);
  //   return;
  // }

  // const blogs = await res.json();

  // if (blogs.length === 0) {
  //   console.log("No blogs found.");
  // } else {
  //   console.log("blogs--------", blogs);
  // }

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
          <h2 className=" text-2xl font-black text-title">Blogs</h2>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
