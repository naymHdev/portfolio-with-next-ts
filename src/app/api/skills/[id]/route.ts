import { connectDB } from "@/lib/config/dbConnect"
import { Skill } from "@/lib/models/skill.model";
import { NextResponse } from "next/server";

export const DELETE = async (
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) => {

    await connectDB()

    try {
        const id = (await params).id;
        const deleteSkill = await Skill.findByIdAndDelete(id);

        if (!deleteSkill) {
            return NextResponse.json({ message: "Skill not found" }, { status: 404 });
        }

        return NextResponse.json(
            {
                success: true,
                message: "Skill deleted successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Error deleting skill",
                errors: error,
            },
            { status: 500 }
        );
    }
};