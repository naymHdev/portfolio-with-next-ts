"use client"

import { skillsSchema } from "@/types/skill";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

type SkillFormValues = z.infer<typeof skillsSchema>;

const SkillCreateForm = () => {

    const openModal = () => {
        const modal = document.getElementById("skill_modal") as HTMLDialogElement | null;
        modal?.showModal();
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SkillFormValues>({
        resolver: zodResolver(skillsSchema),
        defaultValues: {
            title: "",
            image: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log('data', data);
    }

    return (
        <>
            <div>
                <button onClick={openModal} className=" custom-bg px-4 py-2 text-white hover:scale-110 duration-300 transition-transform">
                    Create Skill
                </button>
                <dialog id="skill_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-card">

                        <section>

                            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4  rounded-lg text-white">
                                <h2 className="text-xl font-bold">Add Skill</h2>

                                <div>
                                    <label className="block">Title:</label>
                                    <input
                                        {...register("title")}
                                        className="w-full p-2 border rounded bg-gray-700"
                                        placeholder="Full Stack Developer"
                                    />
                                    {errors.title && <p className="text-red-400">{errors.title.message}</p>}
                                </div>
                            </form>
                        </section>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default SkillCreateForm