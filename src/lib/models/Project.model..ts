import mongoose, { Schema } from "mongoose";

export type TProject = {
  _id?: string;
  projectName: string;
  details: string;
  images: string[];
};

const ProjectSchema = new Schema<TProject>({
  projectName: { type: String, required: true },
  details: { type: String, required: true },
  images: { type: [String], required: true },
});

const ProjectModel =
  mongoose.models.project || mongoose.model("project", ProjectSchema);

export default ProjectModel;
