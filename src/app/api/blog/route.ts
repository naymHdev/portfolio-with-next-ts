import { connectDB } from "@/lib/config/dbConnect";
import BlogModel from "@/lib/models/blogModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export const GET = async () => {
  try {
    const blogs = await BlogModel.find().sort();

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error eatching blogs",
        error,
      },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const blog = await request.json();

    const createBlog = { ...blog };
    // console.log("createBlog", createBlog);

    const newBlog = await BlogModel.create(createBlog);

    return NextResponse.json(
      { success: true, message: "Blog created successfully", data: newBlog },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error creating blog", error },
      { status: 500 }
    );
  }
};
