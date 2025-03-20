import { connectDB } from "@/lib/config/dbConnect";
import ProjectModel from "@/lib/models/Project.model.";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export const POST = async (request: Request) => {
  try {
    const project = await request.json();
    const createProject = { ...project };

    const newProject = await ProjectModel.create(createProject);

    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully",
        data: newProject,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error creating project",
        errros: error,
      },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const projects = await ProjectModel.find();

    return NextResponse.json(projects);
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
