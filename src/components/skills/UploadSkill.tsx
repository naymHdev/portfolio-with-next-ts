"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const skillCategories = ["Frontend", "Backend", "DevOps", "Database", "UI/UX", "Cloud", "Other"];

export default function UploadSkill() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !image || !category) {
            toast("Title and image are required");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", category);
        formData.append("image", image);

        // console.log('formData', title, image);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills`, {
                method: "POST",
                body: formData,
            });

            if (res) {
                console.log("Skill created successfully:", res);
                toast("Skill uploaded successfully");
                router.refresh();
            }
        } catch (error) {
            console.error(error);
            toast("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full"
            />
            {/* Skill Category Dropdown */}
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 border rounded-md"
            >
                {skillCategories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="border p-2 w-full"
            />
            <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2">
                {loading ? "Uploading..." : "Upload"}
            </button>
        </form>
    );
}
