import RouteTitle from "../../../components/ui/RouteTitle";
import { GoDash } from "react-icons/go";
import { Metadata } from "next";
import { IExperience } from "@/lib/models/experience.model";
import { fetchData } from "@/utils/fetchData";
import moment from "moment"

export const metadata: Metadata = {
  title: "Experience | Naym Hossen",
  description: "A showcase of my professional experience and projects.",
};


const Experience = async () => {

  const experience: IExperience[] | null = await fetchData("/api/experience", {
    next: {
      revalidate: 30,
    },
  });

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
                    {itm?.title}
                  </h3>

                  <a
                    href="#"
                    className="font-semibold text-md sm:text-lg text-primaryColor"
                  >
                    {itm?.company}
                  </a>
                </div>
                {/* Joining and Quit Dates */}
                <div className="mt-4 md:mt-6 text-foreground font-medium text-base sm:text-lg flex items-center gap-1 flex-wrap">
                  <p>{moment(itm?.startDate).format("MMM YY")}</p>
                  <GoDash className="text-foreground text-lg" />
                  <p>{moment(itm?.endDate).format("MMM YY")}</p>
                </div>
              </section>

              {/* Experience Details and Technologies */}
              <section className="col-span-full md:col-span-4">
                <div>
                  <p className="font-medium text-base sm:text-lg text-foreground">
                    {itm?.description}
                  </p>

                  {/* Technology Used Section */}
                  <h3 className="font-bold text-left text-lg text-foreground mt-6 md:mt-8">
                    Technology Used
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {itm?.technologies?.map((tech, index) => (
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
                    {itm?.projects?.map((project, index) => (
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
