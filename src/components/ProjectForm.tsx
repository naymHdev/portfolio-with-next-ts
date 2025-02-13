"use client";

import { z } from "zod";
import { fetchData } from "@/utils/fetchData";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import clsx from "clsx";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export const projectSchema = z.object({
  projectName: z.string().min(3, "Project name must be at least 3 characters"),
  details: z.string().min(10, "Details must be at least 10 characters"),
  images: z
    .array(z.string().url("Invalid image URL"))
    .min(1, "At least one image is required"),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectResponse {
  message: string;
  data: ProjectFormData;
}

const ProjectForm = () => {
  const [markdownPreview, setMarkdownPreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormData>({ resolver: zodResolver(projectSchema) });

  const onSubmit = async (data: ProjectFormData) => {
    // console.log("Project created:", data);
    try {
      const response = (await fetchData<ProjectResponse>("/api/project", {
        method: "POST",
        body: JSON.stringify(data),
      })) as { message: string; data: ProjectFormData };

      if (!response) throw new Error("Invalid response from server");

      // console.log("Project created:", response);

      reset();
      toast.success("Project created successfully!");
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create project");
    }
  };

  

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <input
              type="text"
              {...register("projectName")}
              className="w-full bg-background custom-bg focus:outline-none py-6 px-4 text-4xl font-semibold"
              placeholder="Enter project name"
            />
            {errors.projectName && (
              <p className="text-red-500 text-sm">
                {errors.projectName.message}
              </p>
            )}
          </div>

          {/* Content (Markdown Editor) */}
          <div>
            <textarea
              {...register("details")}
              className="w-full bg-background custom-bg focus:outline-none py-3 px-4 font-medium h-40"
              placeholder="Write your project details in Markdown..."
              onChange={(e) => setMarkdownPreview(e.target.value)}
            ></textarea>
            {errors.details && (
              <p className="text-red-500 text-sm">{errors.details.message}</p>
            )}
            {/* Markdown Preview */}
            <div className={clsx({ hidden: markdownPreview.length === 0 })}>
              <h3 className=" font-medium text-title my-2">Blog Preview</h3>
              <div className=" bg-white custom-bg px-4 py-2">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  className="prose max-w-none"
                >
                  {markdownPreview}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <input
              type="text"
              {...register("images.0", { required: true })}
              className="w-full p-2 bg-background custom-bg focus:outline-none"
              placeholder="Enter image URL"
            />
            {errors.images && (
              <p className="text-red-500 text-sm">{errors.images.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("images.1")}
              className="w-full p-2 bg-background custom-bg focus:outline-none"
              placeholder="Enter images URL"
            />
            {errors.images && (
              <p className="text-red-500 text-sm">{errors.images.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-background custom-bg focus:outline-none px-6 py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Create Project"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ProjectForm;
