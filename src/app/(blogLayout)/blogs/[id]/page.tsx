import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import Container from "@/components/ui/Container";
import { TBlog } from "@/lib/models/blogModel";
import { fetchData } from "@/utils/fetchData";

interface BlogDetailsProps {
  params: { id: string };
}

export const BlogDetails = async ({ params }: BlogDetailsProps) => {
  const { id } = params;

  const blogs: TBlog[] | null = await fetchData("/api/blog");

  const blog = blogs?.filter((itm) => itm._id === id);

  // console.log("blog", blog);

  return (
    <div className=" pt-10">
      <Container>
        <div>
          {blog?.map((details) => (
            <BlogDetailsCard key={details._id} details={details} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
