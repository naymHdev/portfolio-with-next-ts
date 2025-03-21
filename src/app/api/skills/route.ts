import cloudinary from "@/lib/config/cloudinary";
import { connectDB } from "@/lib/config/dbConnect";
import { Skill } from "@/lib/models/skill.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectDB();
        const formData = await req.formData();
        const title = formData.get("title") as string;
        const category = formData.get("category") as string;
        const imageFile = formData.get("image") as File;

        console.log('imageFile', formData);

        if (!title || !category || !imageFile) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Convert file to buffer
        const arrayBuffer = await imageFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Upload to Cloudinary
        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ folder: "skills" }, (error, result) => {
                if (error) return reject(error);
                else resolve(result);
            }).end(buffer);
        });

        // Save to MongoDB
        const newSkill = await Skill.create({
            title,
            category,
            image: (uploadResult as any).secure_url,
        });

        return NextResponse.json(newSkill, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}


export async function GET() {
    try {
        await connectDB();
        const skills = await Skill.find();
        return NextResponse.json({ skills });
    } catch (error) {
        console.error("Error fetching skills:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
