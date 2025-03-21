import SkillsSection from "@/components/SkillsSection";
import RouteTitle from "@/components/ui/RouteTitle";
import { ISkill } from "@/types/skill";
import { fetchData } from "@/utils/fetchData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Naym Hossen",
  description:
    "Explore my technical skills, programming languages, frameworks, and tools I specialize in.",
};

interface IManageSkillsPageProps {
  skills: ISkill[] | null;
}

const Skills = async () => {

  const data: IManageSkillsPageProps | null = await fetchData("/api/skills", {
    next: {
      revalidate: 10,
    },
  });
  const skills: ISkill[] = data?.skills ?? [];

  return (
    <>
      <RouteTitle firstP="My" secondP="Specialization" />
      <SkillsSection skills={skills} />
    </>
  );
};

export default Skills;
