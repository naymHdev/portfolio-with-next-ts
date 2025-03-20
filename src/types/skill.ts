import * as z from "zod";

export interface ISkill {
    _id?: string;
    title: string;
    image: string;
}

export const skillsSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    image: z.string(),
});