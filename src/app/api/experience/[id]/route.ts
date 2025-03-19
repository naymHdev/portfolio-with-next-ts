import { connectDB } from "@/lib/config/dbConnect";
import { Experience } from "@/lib/models/experience.model";
import { NextResponse } from "next/server";

// Connnecct to database before running any operation
const LoadDB = async () => {
    await connectDB();
};
LoadDB();

export const DELETE = async (
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) => {

    try {
        const id = (await params).id;
        const deleteExp = await Experience.findByIdAndDelete(id);

        if (!deleteExp) {
            return NextResponse.json({ message: "Experience not found" }, { status: 404 });
        }

        return NextResponse.json(
            {
                success: true,
                message: "Experience deleted successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Error deleting experience",
                errors: error,
            },
            { status: 500 }
        );
    }
};