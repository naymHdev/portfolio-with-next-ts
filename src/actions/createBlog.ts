"use server";

import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
  const blogData = Object.fromEntries(data.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  const blogInfo = await res.json();

  if (blogInfo) {
    redirect(`/dashboard/blogs`);
  }

  return blogInfo;
};
