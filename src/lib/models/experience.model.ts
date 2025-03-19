import mongoose, { Schema, Document } from "mongoose";

export interface IExperience {
    _id?: string;
    title: string;
    company: string;
    companyUrl?: string;
    startDate: Date;
    endDate: Date;
    description: string;
    technologies: string[];
    projects: string[];
}

const ExperienceSchema: Schema = new Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    companyUrl: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], default: [] },
    projects: { type: [String], default: [] },
},
    {
        timestamps: true
    });

export const Experience = mongoose.model<IExperience>("Experience", ExperienceSchema);
