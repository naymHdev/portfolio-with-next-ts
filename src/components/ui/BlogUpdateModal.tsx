"use client";

import { fetchData } from "@/utils/fetchData";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { TBlog } from "@/lib/models/blogModel";

const BlogUpdateModal = ({ blog }: { blog: TBlog }) => {
  const [markdownPreview, setMarkdownPreview] = useState<string>(
    blog.content || ""
  );
  const [modal, setModal] = useState<HTMLDialogElement | null>(null);

  const openModal = () => {
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.close();
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
    setValue,
  } = useForm();

  // Initialize form with project data
  useEffect(() => {
    if (blog) {
      setValue("title", blog.title);
      setValue("content", blog.content);
      setValue("image", blog.image);
      setMarkdownPreview(blog.content);
    }
  }, [blog, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // Make sure to include the project id when sending the update request
      const response = await fetchData(`/api/blog/${blog._id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });

      // console.log("response blog__", response);

      if (!response) throw new Error("Invalid response from server");

      reset();
      closeModal();
      toast.success("Blog updated successfully!");
    } catch {
      //   console.error("Error updating project:", error);
      toast.error("Failed to update blog");
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className="custom-bg hover:scale-105 transition-transform px-5 py-2 text-title"
      >
        Update
      </button>
      <dialog
        id="my_modal_6"
        ref={setModal}
        className="modal modal-bottom sm:modal-middle w-full"
      >
        <div
          style={{ width: "80vw", maxWidth: "100vw", margin: "0" }}
          className="modal-box bg-card"
        >
          <h3 className="font-bold text-lg">Update Project</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
            {/* Project Name */}
            <div>
              <input
                type="text"
                defaultValue={blog?.title}
                {...register("title")}
                className="w-full bg-background custom-bg focus:outline-none py-6 px-4 text-4xl font-semibold"
                placeholder="Enter project name"
              />
            </div>

            {/* Content (Markdown Editor) */}
            <div>
              <textarea
                defaultValue={blog?.content}
                {...register("content")}
                className="w-full bg-background custom-bg focus:outline-none py-3 px-4 font-medium h-40"
                placeholder="Write your project details in Markdown..."
                onChange={(e) => setMarkdownPreview(e.target.value)}
              ></textarea>

              {/* Markdown Preview */}
              <div className={clsx({ hidden: markdownPreview.length === 0 })}>
                <h3 className="font-medium text-title my-2">
                  Markdown Preview
                </h3>
                <div className="bg-white custom-bg px-4 py-2">
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
                defaultValue={blog?.image}
                {...register("image")}
                className="w-full p-2 bg-background custom-bg focus:outline-none"
                placeholder="Enter second image URL"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-background custom-bg focus:outline-none px-6 py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Blog"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BlogUpdateModal;
