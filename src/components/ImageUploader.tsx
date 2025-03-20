"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";
import toast from "react-hot-toast";

interface ImageUploaderProps {
    onImageUpload: (url: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        setUploading(true);
        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Upload failed");

            const data = await res.json();
            setPreview(data.url);
            onImageUpload(data.url);
            toast.success("Image uploaded successfully!");
        } catch (error) {
            toast.error("Image upload failed.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-2">
            <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded" />
            {uploading && <p className="text-gray-400">Uploading...</p>}
            {preview && <CldImage src={preview} width="100" height="100" alt="Skill Icon" crop="fill" />}
        </div>
    );
};

export default ImageUploader;
