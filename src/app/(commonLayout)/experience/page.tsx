import ExperienceCard from "./experienceCard";
import RouteTitle from "../../../components/ui/RouteTitle";

export const experience = [
  {
    companyName: "Logistic Business Solutions Ltd.",
    jobTitle: "Full Stack Developer",
    experienceDetails:
      "Logistic Business Solutions Ltd. is an EdTech startup based in Bangladesh. As a Full Stack Developer, I contribute to developing projects alongside a team of two developers. My role includes hands-on coding and collaborative development.",
    joiningDate: "May, 2024",
    quitDate: "August, 2024",
    technologyUsed: [
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "CSS",
      "React Query",
      "Axios",
      "Node Js",
      "MongoDB",
    ],
    projectsName: ["Ruchiralap"],
  },
];

const Experience = () => {
  return (
    <>
      <RouteTitle firstP="My Work" secondP="Experience" />
      <section className="mt-4 sm:mt-6 lg:mt-10">
        <div className="">
          {experience?.map((itm, index) => (
            <ExperienceCard key={index} itm={itm} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
