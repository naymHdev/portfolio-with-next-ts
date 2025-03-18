import NHReactMarkdown from "@/components/ui/ReactMarkdown";
import RouteTitle from "@/components/ui/RouteTitle";
import { TProject } from "@/lib/models/Project.model.";
import { fetchData } from "@/utils/fetchData";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LiaArrowCircleRightSolid } from "react-icons/lia";

export const metadata: Metadata = {
  title: "Projects | Naym Hossen",
  description:
    "Explore my latest projects, showcasing my skills in full-stack development, Next.js, and modern web technologies.",
};

const Projects = async () => {
  const projects: TProject[] | null = await fetchData("/api/project");

  return (
    <>
      <RouteTitle firstP="My" secondP="Projects" />

      {/* card ui design */}
      <section className="">
        <div>
          {
            projects?.length === 0 ? <><p>Projects are not available!</p></> : <>
              {
                projects?.map((project) => <div key={project._id}
                  className="mt-5">
                  <div className="flex flex-col md:flex-row justify-between w-full gap-6">
                    <div className="flex-1">
                      <NHReactMarkdown
                        content={
                          project?.details?.length > 100
                            ? project.details.slice(0, 100) + "..."
                            : project?.details?.length < 10
                              ? "Details not available"
                              : project.details
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <Image
                        src={project.images[0]}
                        alt={project?.projectName}
                        layout="responsive"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  </div>

                  <Link href={`/projects/${project._id}`}>
                    <div className="mt-4 cursor-pointer group">
                      <h2 className="text-2xl font-bold text-title group-hover:text-primaryColor">{project?.projectName}</h2>

                      <div className="flex items-center justify-between border-b border-[#013f5b] py-2 transition-all duration-300 group-hover:border-primaryColor">
                        <p className="group-hover:text-primaryColor transition-colors duration-300">
                          View project
                        </p>
                        <div className="text-primaryColor group-hover:translate-x-1 transition-transform duration-300">
                          <LiaArrowCircleRightSolid fontSize={30} />
                        </div>
                      </div>
                    </div>
                  </Link>

                </div>)
              }

            </>
          }
        </div>
      </section>
    </>
  );
};

export default Projects;
