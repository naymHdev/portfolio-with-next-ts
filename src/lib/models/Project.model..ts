import mongoose, { Schema } from "mongoose";

export type TProject = {
  _id?: string;
  projectName: string;
  details: string;
  images: string[];
  links: {
    liveLink: string;
    frontend: string;
    backend: string;
    nextJS?: string;
  };
};

const ProjectSchema = new Schema<TProject>({
  projectName: { type: String, required: true },
  details: { type: String, required: true },
  images: { type: [String], required: true },
  links: {
    liveLink: { type: String, required: true },
    frontend: { type: String, required: true },
    backend: { type: String, required: true },
    nextJS: { type: String },
  },
});

const ProjectModel =
  mongoose.models.project || mongoose.model("project", ProjectSchema);

export default ProjectModel;
