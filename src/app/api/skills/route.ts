import cloudinary from "@/lib/config/cloudinary";
import { connectDB } from "@/lib/config/dbConnect";
import { Skill } from "@/lib/models/skill.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectDB();
        const formData = await req.formData();
        const title = formData.get("title") as string;
        const imageFile = formData.get("image") as File;

        console.log('imageFile', formData);

        if (!title || !imageFile) {
            return NextResponse.json({ error: "Title and image are required" }, { status: 400 });
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

        const imageUrl = (uploadResult as any).secure_url;

        // Save to MongoDB
        const newSkill = new Skill({ title, image: imageUrl });
        await newSkill.save();

        return NextResponse.json({ message: "Skill uploaded successfully", skill: newSkill }, { status: 201 });
    } catch (error) {
        console.error("Error uploading skill:", error);
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
