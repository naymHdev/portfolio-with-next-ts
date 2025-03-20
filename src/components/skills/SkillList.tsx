


import { CldImage } from "next-cloudinary";
import { fetchData } from "@/utils/fetchData";

interface Skill {
    _id: string;
    title: string;
    image: string;
}

export default async function SkillList() {


    const skills: Skill[] | null = await fetchData("/api/skills");


    return (
        <div className="grid grid-cols-2 gap-4">
            {skills?.map((skill) => (
                <div key={skill._id} className="border p-4">
                    <h3 className="text-lg font-bold">{skill.title}</h3>
                    <CldImage src={skill.image} width="500" height="500" alt={skill.title} />
                </div>
            ))}
        </div>
    );
}
