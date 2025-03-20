"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import { ISkill } from "@/types/skill";

// export const skillsIcons = [
//   {
//     category: "frontend",
//     skills: [
//       {
//         name: "HTML",
//         icon: "/icons/skills/html.png",
//       },
//       {
//         name: "CSS",
//         icon: "/icons/skills/css.png",
//       },
//       {
//         name: "Tailwind CSS",
//         icon: "/icons/skills/Tailwind CSS.png",
//       },
//       {
//         name: "Bootstrap",
//         icon: "/icons/skills/Bootstrap.png",
//       },
//       {
//         name: "React",
//         icon: "/icons/skills/react.png",
//       },
//       {
//         name: "Vite",
//         icon: "/icons/skills/Vite.js.png",
//       },
//       {
//         name: "Next.js",
//         icon: "/icons/skills/Next.js.png",
//       },
//       {
//         name: "Axios",
//         icon: "/icons/skills/Azios.png",
//       },
//       {
//         name: "JavaScript",
//         icon: "/icons/skills/js.png",
//       },
//       {
//         name: "TypeScript",
//         icon: "/icons/skills/typescript.png",
//       },
//       {
//         name: "MUI",
//         icon: "/icons/skills/Material UI.png",
//       },
//       {
//         name: "Redux",
//         icon: "/icons/skills/Redux.png",
//       },
//     ],
//   },
//   {
//     category: "backend",
//     skills: [
//       {
//         name: "Node.js",
//         icon: "/icons/skills/nodejs.png",
//       },
//       {
//         name: "Express.js",
//         icon: "/icons/skills/Express.png",
//       },
//       {
//         name: "MongoDB",
//         icon: "/icons/skills/MongoDB.png",
//       },
//       {
//         name: "Mongoose",
//         icon: "/icons/skills/Mongoose.js.png",
//       },
//       {
//         name: "JWT",
//         icon: "/icons/skills/jwt.png",
//       },
//     ],
//   },
//   {
//     category: "tools",
//     skills: [
//       {
//         name: "Git",
//         icon: "/icons/skills/Git.png",
//       },
//       {
//         name: "GitHub",
//         icon: "/icons/skills/github.png",
//       },
//       {
//         name: "Figma",
//         icon: "/icons/skills/figma.png",
//       },
//       {
//         name: "Netlify",
//         icon: "/icons/skills/netlify.svg",
//       },
//       {
//         name: "Vercel",
//         icon: "/icons/skills/Vercel.png",
//       },
//       {
//         name: "Postman",
//         icon: "/icons/skills/Postman.png",
//       },
//       {
//         name: "PowerShell",
//         icon: "/icons/skills/Powershell.png",
//       },
//     ],
//   },
// ];

// Define the Framer Motion variants for the animations

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = ({ skills }: { skills: ISkill[] | null }) => {
  // console.log('skills', skills);
  const [loading, setLoading] = useState(true);

  // Transform skills data into the required format
  const skillsIcons = skills
    ? Object.values(
      skills.reduce((acc, skill) => {
        const categoryKey = skill.category.toLowerCase();

        if (!acc[categoryKey]) {
          acc[categoryKey] = {
            category: categoryKey,
            skills: [],
          };
        }

        acc[categoryKey].skills.push({
          name: skill.title,
          icon: skill.image,
        });

        return acc;
      }, {} as Record<string, { category: string; skills: { name: string; icon: string }[] }>)
    )
    : [];
  // console.log(skillsIcons);

  useEffect(() => {
    // Simulate a delay to show the loading animation
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <FaSpinner className="animate-spin text-blue-500 text-4xl" />
          <p className="mt-4 text-foreground text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {skillsIcons?.map((category, index) => (
        <div key={index} className="mb-8">
          {/* Category Heading */}
          <h2 className="text-xl sm:text-2xl font-bold mt-4 mb-3 capitalize text-title">
            {category.category}
          </h2>

          {/* Grid Layout for Skills */}
          <div className=" flex flex-wrap items-center justify-center gap-4">
            {category.skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center group"
              >
                {/* Icon Container */}
                <div className="bg-card hover:bg-[#122b3c] custom-bg rounded-lg p-4 sm:p-6 transition-all">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={50}
                    height={50}
                  />
                </div>

                {/* Skill Name */}
                <p className="mt-3 text-base sm:text-lg font-semibold text-title group-hover:text-primaryColor">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default SkillsSection;
