"use client"

import { ISkill } from "@/types/skill";
import Image from "next/image";


export default function SkillList({ skills }: { skills: ISkill[] | null }) {


    // console.log('skills', skills);



    return (
        <div className="mt-10 grid grid-cols-2 gap-4">
            {skills?.map((skill) => (
                <div key={skill._id} className="border p-4">
                    <h3 className="text-lg font-bold">{skill.title}</h3>
                    <Image src={skill.image} width={100} height={100} alt={skill.title} />
                </div>
            ))}
        </div>
    );
}
