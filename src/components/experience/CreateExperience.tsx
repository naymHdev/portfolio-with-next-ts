"use client"

import { experienceSchema } from "@/types/experience";
import { FC, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { fetchData } from "@/utils/fetchData";
import toast from "react-hot-toast";

type ExperienceFormValues = z.infer<typeof experienceSchema>;

const CreateExperienceForm: FC = () => {

    const [techInput, setTechInput] = useState("");
    const [projectInput, setProjectInput] = useState("");

    const openModal = () => {
        const modal = document.getElementById("experience_modal") as HTMLDialogElement | null;
        modal?.showModal();
    };

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<ExperienceFormValues>({
        resolver: zodResolver(experienceSchema),
        defaultValues: {
            title: "",
            company: "",
            companyUrl: "",
            startDate: "",
            endDate: "",
            description: "",
            technologies: [],
            projects: [],
        },
    });

    const technologies = watch("technologies");
    const projects = watch("projects");

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        // console.log("Submitted Data:", data);

        try {
            const response = await fetchData<ExperienceFormValues>("/api/experience", {
                method: "POST",
                body: JSON.stringify(data),
            });
            // console.log("Project created:", response);

            if (!response) throw new Error("Invalid response from server");


            reset();
            toast.success("Cretaed Experience Successfully!");
        } catch (error: any) {
            // console.error("Experience created faild", error);
            return new Error(error);
            toast.error("Sorry, please try again!");
        }

    };

    return (
        <>
            <section className=" mt-5">
                <button onClick={openModal} className=" custom-bg px-4 py-2 text-white hover:scale-110 duration-300 transition-transform">
                    Create Experience
                </button>
                <dialog id="experience_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-card">

                        <section>

                            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4  rounded-lg text-white">
                                <h2 className="text-xl font-bold">Add Experience</h2>

                                <div>
                                    <label className="block">Title:</label>
                                    <input
                                        {...register("title")}
                                        className="w-full p-2 border rounded bg-gray-700"
                                        placeholder="Full Stack Developer"
                                    />
                                    {errors.title && <p className="text-red-400">{errors.title.message}</p>}
                                </div>

                                <div>
                                    <label className="block">Company:</label>
                                    <input
                                        {...register("company")}
                                        className="w-full p-2 border rounded bg-gray-700"
                                        placeholder="Company Name"
                                    />
                                    {errors.company && <p className="text-red-400">{errors.company.message}</p>}
                                </div>

                                <div>
                                    <label className="block">Company URL:</label>
                                    <input
                                        {...register("companyUrl")}
                                        className="w-full p-2 border rounded bg-gray-700"
                                        placeholder="https://company.com"
                                    />
                                    {errors.companyUrl && <p className="text-red-400">{errors.companyUrl.message}</p>}
                                </div>

                                <div className="flex gap-4">
                                    <div>
                                        <label className="block">Start Date:</label>
                                        <input type="date" {...register("startDate")} className="p-2 border rounded bg-gray-700" />
                                    </div>

                                    <div>
                                        <label className="block">End Date:</label>
                                        <input type="date" {...register("endDate")} className="p-2 border rounded bg-gray-700" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block">Description:</label>
                                    <textarea {...register("description")} className="w-full p-2 border rounded bg-gray-700" placeholder="Job Description"></textarea>
                                    {errors.description && <p className="text-red-400">{errors.description.message}</p>}
                                </div>

                                <div>
                                    <label className="block">Technologies:</label>
                                    <div className="flex gap-2">
                                        <input
                                            value={techInput}
                                            onChange={(e) => setTechInput(e.target.value)}
                                            className="p-2 border rounded bg-gray-700"
                                            placeholder="e.g. React"
                                        />
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-blue-500 rounded"
                                            onClick={() => {
                                                if (techInput.trim()) {
                                                    setValue("technologies", [...(technologies || []), techInput]); // Ensure an array
                                                    setTechInput("");
                                                }
                                            }}
                                        >
                                            Add
                                        </button>
                                    </div>

                                    {/* Display Added Technologies */}
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {technologies?.map((tech, index) => (
                                            <span key={index} className="px-2 py-1 bg-gray-600 rounded">
                                                {tech}{" "}
                                                <button
                                                    type="button"
                                                    className="text-red-400"
                                                    onClick={() =>
                                                        setValue(
                                                            "technologies",
                                                            technologies?.filter((_, i) => i !== index)
                                                        )
                                                    }
                                                >
                                                    ✕
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                    {errors.technologies && <p className="text-red-400">{errors.technologies.message}</p>}
                                </div>

                                <div>
                                    <label className="block">Projects:</label>
                                    <div className="flex gap-2">
                                        <input
                                            value={projectInput}
                                            onChange={(e) => setProjectInput(e.target.value)}
                                            className="p-2 border rounded bg-gray-700"
                                            placeholder="e.g. Project Name"
                                        />
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-green-500 rounded"
                                            onClick={() => {
                                                if (projectInput?.trim()) {
                                                    setValue("projects", [...(projects || []), projectInput]);
                                                    setProjectInput("");
                                                }
                                            }}
                                        >
                                            Add
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {projects?.map((project, index) => (
                                            <span key={index} className="px-2 py-1 bg-gray-600 rounded">
                                                {project}{" "}
                                                <button
                                                    type="button"
                                                    className="text-red-400"
                                                    onClick={() =>
                                                        setValue(
                                                            "projects",
                                                            projects.filter((_, i) => i !== index)
                                                        )
                                                    }
                                                >
                                                    ✕
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button type="submit" className="px-4 py-2 bg-green-500 rounded w-full">
                                    Submit
                                </button>
                            </form>
                        </section>

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="custom-bg bg-card px-4 py-2 text-white">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </section>
        </>
    )
}

export default CreateExperienceForm