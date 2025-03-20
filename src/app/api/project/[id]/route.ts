import { connectDB } from "@/lib/config/dbConnect";
import ProjectModel from "@/lib/models/Project.model.";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    await connectDB();
    const id = (await params).id;

    const project = await ProjectModel.findById(id);

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

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  await connectDB();

  try {
    const id = (await params).id;
    const deletedProject = await ProjectModel.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Project deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error deleting project",
        errors: error,
      },
      { status: 500 }
    );
  }
};

export const PUT = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  await connectDB();

  try {
    const id = (await params).id;

    const updatedData = await req.json();

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Project updated successfully",
        project: updatedProject,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error updating project",
        errors: error,
      },
      { status: 500 }
    );
  }
};
