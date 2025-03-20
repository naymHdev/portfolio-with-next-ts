import mongoose from "mongoose";
import { JSX } from "react";

export type TBlog = {
  map(arg0: (blog: TBlog) => JSX.Element): import("react").ReactNode;
  length: number;
  _id?: string;
  title: string;
  content: string;
  category: string;
  image: string;
  date: Date;
};

const BlogSchema = new mongoose.Schema<TBlog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const BlogModel = mongoose.models.blog || mongoose.model("blog", BlogSchema);

export default BlogModel;
