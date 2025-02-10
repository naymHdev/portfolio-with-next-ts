import { connectDB } from "@/lib/config/dbConnect";
import BlogModel from "@/lib/models/blogModel";
import { NextResponse } from "next/server";

export const blogs = [
  {
    id: "1",
    title: "The Rise of Quantum Computing",
    description:
      "Dive into the fascinating world of quantum computing, where traditional binary bits make way for qubits, unlocking unprecedented computational power. Explore the potential applications, challenges, and the race among tech giants to achieve quantum supremacy.",
    publish_date: "2025-03-01",
    author_name: "Mezbaul Abedin Persian",
    blog_image:
      "https://www.insights.onegiantleap.com/content/images/2023/10/Content-Hub-Blog---The-rise-of-quantum-computing.png",
    total_likes: "1200",
  },
];

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export const GET = async () => {
  return NextResponse.json(blogs);
};

export const POST = async (request: Request) => {
  try {
    const formData = await request.formData();

    const title = formData.get("title") as string | null;
    const content = formData.get("content") as string | null;
    const category = formData.get("category") as string | null;
    const image = formData.get("image") as string | null;

    // Basic validation
    if (!title || !content || !category || !image) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const newBlog = await BlogModel.create({
      title,
      content,
      category,
      image,
    });

    return NextResponse.json(
      { success: true, message: "Blog created successfully", data: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error creating blog", error },
      { status: 500 }
    );
  }
};
