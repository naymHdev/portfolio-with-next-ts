import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import fs from "fs/promises";
import { promisify } from "util";
import cloudinary from "@/lib/config/cloudinary";

export const config = {
    api: {
        bodyParser: false, // Disables default body parsing
    },
};

const parseForm = promisify(new IncomingForm().parse);

export async function POST(req: Request) {
    try {
        const [fields, files] = await parseForm(req);

        if (!files?.image) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const file = files.image[0];
        const fileBuffer = await fs.readFile(file.filepath);

        // Upload to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(file.filepath, {
            folder: "uploads",
            resource_type: "image",
        });

        return NextResponse.json(
            { url: uploadResult.secure_url, public_id: uploadResult.public_id },
            { status: 200 }
        );
    } catch (error) {
        console.error("Upload Error:", error);
        return NextResponse.json(
            { error: "Upload failed. Please try again." },
            { status: 500 }
        );
    }
}
