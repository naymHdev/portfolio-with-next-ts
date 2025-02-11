import RouteTitle from "../../../components/ui/RouteTitle";
import { GoDash } from "react-icons/go";

const experience = [
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
            <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {/* Job Title and Company Info */}
              <section className="col-span-full md:col-span-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-title mb-2 md:mb-4">
                    {itm?.jobTitle}
                  </h3>

                  <a
                    href="#"
                    className="font-semibold text-md sm:text-lg text-primaryColor"
                  >
                    {itm?.companyName}
                  </a>
                </div>
                {/* Joining and Quit Dates */}
                <div className="mt-4 md:mt-6 text-foreground font-medium text-base sm:text-lg flex items-center gap-1 flex-wrap">
                  <p>{itm?.joiningDate}</p>
                  <GoDash className="text-foreground text-lg" />
                  <p>{itm?.quitDate}</p>
                </div>
              </section>

              {/* Experience Details and Technologies */}
              <section className="col-span-full md:col-span-4">
                <div>
                  <p className="font-medium text-base sm:text-lg text-foreground">
                    {itm?.experienceDetails}
                  </p>

                  {/* Technology Used Section */}
                  <h3 className="font-bold text-left text-lg text-foreground mt-6 md:mt-8">
                    Technology Used
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {itm?.technologyUsed?.map((tech, index) => (
                      <div key={index}>
                        <button className="px-3 py-1 text-sm font-medium bg-card text-primaryColor custom-bg">
                          {tech}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Projects Section */}
                  <h3 className="font-bold text-left text-lg text-foreground mt-6 md:mt-8">
                    Projects
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {itm?.projectsName?.map((project, index) => (
                      <div key={index}>
                        <h2 className="font-bold text-md sm:text-lg text-title">
                          {project}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
