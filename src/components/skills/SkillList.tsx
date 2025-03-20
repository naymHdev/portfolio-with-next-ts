"use client"

import { ISkill } from "@/types/skill";
import Image from "next/image";


export default function SkillList({ skills }: { skills: ISkill[] | null }) {


    // console.log('skills', skills);



    return (
        <div className="mt-10 flex flex-wrap gap-6">
            {skills?.map((skill) => (
                <div key={skill._id} className="p-4 bg-card custom-bg">
                    <h3 className="text-lg font-bold text-center mb-4">{skill.title}</h3>
                    <Image src={skill.image} width={80} height={80} alt={skill.title} />
                    <div className=" flex items-center justify-center mt-4">
                        <button className=" bg-card px-6 py-2 custom-bg hover:bg-red-600 hover:border-none hover:text-white">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
