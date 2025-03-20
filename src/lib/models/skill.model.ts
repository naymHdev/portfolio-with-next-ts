import { ISkill } from "@/types/skill";
import mongoose from "mongoose";


const SkillSchema = new mongoose.Schema<ISkill>({
    title: { type: String, required: true },
    image: { type: String, required: true },
},
    {
        timestamps: true
    });

export const Skill = mongoose.model<ISkill>("Experience", SkillSchema);