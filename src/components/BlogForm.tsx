/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import clsx from "clsx";

const blogSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  category: z.string().min(3, "Category is required"),
  image: z.string().url("Invalid image URL"),
});

type BlogFormData = z.infer<typeof blogSchema>;

const BlogForm = () => {
  const [markdownPreview, setMarkdownPreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  const onSubmit = async (data: BlogFormData) => {
    // console.log("data", data);
    try {
      const response = await fetch("https://naym-hossen.vercel.app/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // console.log("response", response);

      // Parse the JSON response only if it's a successful response
      await response.json();

      toast.success("Blog created successfully!");
    } catch (error: any) {
      console.log("catch", error);
      toast.error(error.message || "Failed to create blog");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <input
            type="text"
            {...register("title")}
            className="w-full bg-background custom-bg focus:outline-none py-6 px-4 text-4xl font-semibold"
            placeholder="Enter blog title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Content (Markdown Editor) */}
        <div>
          <textarea
            {...register("content")}
            className="w-full bg-background custom-bg focus:outline-none py-3 px-4 font-medium h-40"
            placeholder="Write your blog in Markdown..."
            onChange={(e) => setMarkdownPreview(e.target.value)}
          ></textarea>
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
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

        {/* Category */}
        <div>
          <input
            type="text"
            {...register("category")}
            className="w-full bg-background custom-bg focus:outline-none p-2"
            placeholder="Enter category"
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <input
            type="text"
            {...register("image")}
            className="w-full p-2 bg-background custom-bg focus:outline-none"
            placeholder="Enter image URL"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-background custom-bg focus:outline-none px-6 py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
