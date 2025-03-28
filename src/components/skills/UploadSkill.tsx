"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const skillCategories = ["Frontend", "Backend", "DevOps", "Database", "UI/UX", "Cloud", "Tools", "Other"];



export default function UploadSkill() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const modalRef = useRef<HTMLDialogElement | null>(null);

    const openModal = () => {
        const modal = document.getElementById("skill_modal") as HTMLDialogElement | null;
        modal?.showModal();
    };

    const closeModal = () => {
        modalRef.current?.close();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !image || !category) {
            toast.error("Title and image are required");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", category);
        formData.append("image", image);

        // console.log('formData', title, image, category);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills`, {
                method: "POST",
                body: formData,
            });

            if (res) {
                // console.log("Skill created successfully:", res);
                toast.success("Skill uploaded successfully");
                router.refresh();
                closeModal();
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button onClick={openModal} className=" custom-bg px-4 py-2 text-white hover:scale-110 duration-300 transition-transform">
                Create Skill
            </button>
            <dialog id="skill_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-card">

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-xl font-bold">Add your skill</h2>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 bg-card focus:outline-none custom-bg"
                        />
                        {/* Skill Category Dropdown */}
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 bg-card focus:outline-none custom-bg"
                        >
                            {skillCategories.map((cat) => (
                                <option key={cat} value={cat} className="bg-card bg-gray-500">
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files?.[0] || null)}
                            className="w-full p-2 bg-card focus:outline-none custom-bg"
                        />
                        <button type="submit" disabled={loading} className="px-6 py-2 bg-card focus:outline-none custom-bg text-white">
                            {loading ? "Uploading..." : "Upload"}
                        </button>
                    </form>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="custom-bg bg-card px-4 py-2 text-white">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>


        </>
    );
}
