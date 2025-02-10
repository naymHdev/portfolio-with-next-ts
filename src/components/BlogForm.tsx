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
import { useRouter } from "next/navigation";

const blogSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  category: z.string().min(3, "Category is required"),
  image: z.string().url("Invalid image URL"),
});

type BlogFormData = z.infer<typeof blogSchema>;

const BlogForm = () => {
  const router = useRouter();
  const [markdownPreview, setMarkdownPreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  const onSubmit = async (data: BlogFormData) => {
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      toast.success("Blog created successfully!");
      router.push("/blogs"); // Redirect to blogs page
    } catch (error: any) {
      toast.error(error.message || "Failed to create blog");
    }
  };

  return (
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            {...register("title")}
            className="w-full border p-2 rounded"
            placeholder="Enter blog title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            {...register("category")}
            className="w-full border p-2 rounded"
            placeholder="Enter category"
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            {...register("image")}
            className="w-full border p-2 rounded"
            placeholder="Enter image URL"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Content (Markdown Editor) */}
        <div>
          <label className="block text-sm font-medium">
            Content (Markdown)
          </label>
          <textarea
            {...register("content")}
            className="w-full border p-2 rounded h-40"
            placeholder="Write your blog in Markdown..."
            onChange={(e) => setMarkdownPreview(e.target.value)}
          ></textarea>
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Create Blog"}
        </button>
      </form>

      {/* Markdown Preview */}
      <div className="mt-8">
        <h3 className="text-xl font-bold">Markdown Preview</h3>
        <div className="border p-4 rounded bg-gray-50">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]} // For GitHub-flavored Markdown support (tables, task lists, etc.)
            rehypePlugins={[rehypeHighlight]} // For syntax highlighting
            className="prose max-w-none"
          >
            {markdownPreview}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
