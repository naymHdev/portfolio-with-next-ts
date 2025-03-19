import { connectDB } from "@/lib/config/dbConnect";
import { Experience } from "@/lib/models/experience.model";
import { NextResponse } from "next/server";

const LoadDB = async () => {
    await connectDB();
};

LoadDB();

export const GET = async () => {
    try {
        const experience = await Experience.find();

        return NextResponse.json(experience);
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Error eatching experience",
                errors: error,
            },
            { status: 500 }
        );
    }
};


export const POST = async (request: Request) => {
    try {
        const experience = await request.json();
        const createExperience = { ...experience };

        const isExperience = await Experience.create(createExperience);

        return NextResponse.json(
            {
                success: true,
                message: "Experience created successfully",
                data: isExperience,
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Error creating experience",
                errros: error,
            },
            { status: 500 }
        );
    }
};