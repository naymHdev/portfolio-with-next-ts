import { GoDash } from "react-icons/go";

interface IItemProps {
  companyName: string;
  jobTitle: string;
  experienceDetails: string;
  joiningDate: string;
  quitDate: string;
  technologyUsed: string;
  projectsName: string;
}

const ExperienceCard = ({ itm }: { itm: IItemProps }) => {
  const {
    companyName,
    jobTitle,
    experienceDetails,
    joiningDate,
    quitDate,
    technologyUsed,
    projectsName,
  } = itm || {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
      {/* Job Title and Company Info */}
      <section className="col-span-full md:col-span-2">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-title mb-2 md:mb-4">
            {jobTitle}
          </h3>

          <a
            href="#"
            className="font-semibold text-md sm:text-lg text-primaryColor"
          >
            {companyName}
          </a>
        </div>
        {/* Joining and Quit Dates */}
        <div className="mt-4 md:mt-6 text-foreground font-medium text-base sm:text-lg flex items-center gap-1 flex-wrap">
          <p>{joiningDate}</p>
          <GoDash className="text-foreground text-lg" />
          <p>{quitDate}</p>
        </div>
      </section>

      {/* Experience Details and Technologies */}
      <section className="col-span-full md:col-span-4">
        <div>
          <p className="font-medium text-base sm:text-lg text-foreground">
            {experienceDetails}
          </p>

          {/* Technology Used Section */}
          <h3 className="font-bold text-left text-lg text-foreground mt-6 md:mt-8">
            Technology Used
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologyUsed?.map((tech, index) => (
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
            {projectsName?.map((project, index) => (
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
  );
};

export default ExperienceCard;
