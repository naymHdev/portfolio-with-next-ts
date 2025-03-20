import { ISkill } from "@/types/skill";
import mongoose, { models, Schema } from "mongoose";


const SkillSchema = new Schema<ISkill>({
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
},
    {
        timestamps: true
    });

export const Skill = models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);