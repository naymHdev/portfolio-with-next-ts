import * as z from "zod";

export interface ISkill {
    _id?: string;
    title: string;
    category: string;
    image: string;
}

export const skillsSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    category: z.string({ required_error: "Category is required" }),
    image: z.string().url("Invalid image URL").optional(),
});

export type SkillFormValues = z.infer<typeof skillsSchema>;