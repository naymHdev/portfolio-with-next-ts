"use client"

import { IExperience } from "@/lib/models/experience.model"
import { fetchData } from "@/utils/fetchData"
import moment from "moment"
import toast from "react-hot-toast"


const ExperienceCard = ({ experience }: { experience: IExperience }) => {


    const handleDelete = async (id: string | undefined) => {
        if (!id) {
            toast.error("Invalid experience ID");
            return;
        }

        try {
            const response = await fetchData(`/api/experience/${id}`, {
                method: "DELETE",
            });

            if (!response) {
                throw new Error("No response from the server");
            }

            // console.log("Experience deleted successfully", response);
            toast.success("Experience deleted successfully");
        } catch (error) {
            console.error("Failed to delete experience:", error);
            toast.error("Failed to delete experience");
        }
    };



    return (
        <>
            <div className="bg-card text-white p-5 rounded-lg shadow-md w-full">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <p className="text-blue-400 font-semibold">{experience.company}</p>
                <p className="text-gray-400">
                    {moment(experience.startDate).format("MMM Do YY")} - {moment(experience.endDate).format("MMM Do YY")}
                </p>
                <p className="mt-2 text-gray-300">{experience.description}</p>

                <div className="mt-4">
                    <h4 className="font-semibold">Technology Used:</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {experience?.technologies?.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-card custom-bg text-white rounded-md text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {experience?.projects?.length > 0 && (
                    <div className="mt-4">
                        <h4 className="font-semibold">Compleated Projects:</h4>
                        <ul className="list-disc list-inside mt-1">
                            {experience?.projects?.map((project, index) => (
                                <li key={index}>{project}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className=" mt-5 flex justify-end items-center gap-4">
                    <button
                        className="custom-bg hover:scale-105 transition-transform px-5 py-2 text-title"
                    >
                        Update
                    </button>
                    <button
                        onClick={() => handleDelete(experience._id)}
                        className="custom-bg hover:scale-105 transition-transform px-6 py-2 text-title hover:bg-red-500 hover:border-none"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default ExperienceCard