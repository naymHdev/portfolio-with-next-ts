import * as z from "zod";

export const experienceSchema = z.object({
    title: z.string().min(5, "Title must be at least 3 characters"),
    company: z.string().min(3, "Company name is required"),
    companyUrl: z.string().url().optional(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string().min(10, "Description must be at least 10 characters"),
    technologies: z.array(z.string()).optional(),
    projects: z.array(z.string()).optional(),
});