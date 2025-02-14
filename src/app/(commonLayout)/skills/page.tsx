import SkillsSection from "@/components/SkillsSection";
import RouteTitle from "@/components/ui/RouteTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Naym Hossen",
  description:
    "Explore my technical skills, programming languages, frameworks, and tools I specialize in.",
};

const Skills = () => {
  return (
    <>
      <RouteTitle firstP="My" secondP="Specialization" />
      <SkillsSection />
    </>
  );
};

export default Skills;
