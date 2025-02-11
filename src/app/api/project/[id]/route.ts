import { connectDB } from "@/lib/config/dbConnect";
import BlogModel from "@/lib/models/blogModel";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    await connectDB();
    const id = (await params).id;

    const project = await BlogModel.findById(id);

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error eatching project",
        errors: error,
      },
      { status: 500 }
    );
  }
};
