import mongoose, { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    github: { type: String },
    liveDemo: { type: String },
  },
  { timestamps: true }
);

export default models.Project || model("Project", ProjectSchema);
