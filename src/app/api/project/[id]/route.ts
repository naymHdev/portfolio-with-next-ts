import { connectDB } from "@/lib/config/dbConnect";
import BlogModel from "@/lib/models/blogModel";
import { NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  context: { params: { id: string } }
) => {
  try {
    await connectDB();
    const { id } = await context.params;

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
