"use client";

import { useState } from "react";
import toast from "react-hot-toast";

type ImageUploaderProps = {
    onImageUpload: (imageUrl: string) => void;
};

const ImageUploader = ({ onImageUpload }: ImageUploaderProps) => {
    const [image, setImage] = useState<File | null>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        // Set image to show preview (optional)
        setImage(file);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "your_upload_preset"); // Cloudinary upload preset
        formData.append("cloud_name", process.env.CLOUDINARY_CLOUD_NAME as string); // Cloudinary cloud name

        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dgrg4lmww/image/upload", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            if (res.ok) {
                onImageUpload(data.secure_url); // Pass the image URL to the parent form
                toast.success("Image uploaded successfully!");
            } else {
                toast.error(data.error?.message || "Image upload failed");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            toast.error("Image upload failed");
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {image && <img src={URL.createObjectURL(image)} alt="preview" width={100} />}
        </div>
    );
};

export default ImageUploader;
