"use client";

import { TProject } from "@/lib/models/Project.model.";
import Image from "next/image";
import NHReactMarkdown from "./ReactMarkdown";
import { fetchData } from "@/utils/fetchData";
import toast from "react-hot-toast";

const ProjectCard = ({ project }: { project: TProject }) => {
  const handleDelete = async (id: string | undefined) => {
    const response = await fetchData(`/api/project/${id}`, {
      method: "DELETE",
    });
    if (response) {
      toast.success("Project deleted successfully");
      // console.log("Blog deleted successfully", response);
    } else {
      // console.error("Failed to delete blog", response);
      toast.error("Failed to delete project");
    }
  };

  return (
    <>
      <section className="">
        <div>
          <Image
            src={project.images[0]}
            alt={project?.projectName}
            layout="responsive"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-6 space-y-6">
          <h2 className=" text-2xl font-semibold text-title">
            {project?.projectName}
          </h2>
          <NHReactMarkdown content={project?.details?.slice(0, 100)} />
        </div>
        <div className="flex items-center gap-4 mt-4">
          <button className="custom-bg hover:scale-105 transition-transform px-5 py-2 text-title">
            Update
          </button>
          <button
            onClick={() => handleDelete(project?._id)}
            className="custom-bg hover:scale-105 hover:text-white transition-transform px-5 py-2 text-title hover:bg-red-500 hover:border-none"
          >
            Delete
          </button>
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
