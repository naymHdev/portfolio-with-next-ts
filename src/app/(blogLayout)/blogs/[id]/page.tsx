import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import Container from "@/components/ui/Container";
import { TBlog } from "@/lib/models/blogModel";
import { fetchData } from "@/utils/fetchData";

export const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const blogs: TBlog[] | null = await fetchData("/api/blog");

  const blogDetails = blogs?.filter((itm) => itm._id === id);

  console.log("blogDetails", blogDetails);

  return (
    <div className=" pt-10">
      <Container>
        <div>
          {blogDetails?.map((details) => (
            <BlogDetailsCard key={details._id} details={details} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
