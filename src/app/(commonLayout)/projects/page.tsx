import NHReactMarkdown from "@/components/ui/ReactMarkdown";
import RouteTitle from "@/components/ui/RouteTitle";
import { TProject } from "@/lib/models/Project.model.";
import { fetchData } from "@/utils/fetchData";
import Image from "next/image";
import Link from "next/link";

const Projects = async () => {
  const projects: TProject[] | null = await fetchData("/api/project");

  return (
    <>
      <RouteTitle firstP="My" secondP="Projects" />
      <div className="mt-4 sm:mt-6 lg:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects?.map((project) => (
            <div
              key={project._id}
              className="border border-primaryColor bg-card custom-bg h-full flex flex-col"
            >
              <div>
                <Image
                  src={project.images[0]}
                  alt={project?.projectName}
                  layout="responsive"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
              </div>
              <div className="p-3 mb-2 flex-grow flex flex-col">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-title">
                    {project?.projectName}
                  </h2>
                </div>
                <NHReactMarkdown
                  content={
                    project?.details?.length > 100
                      ? project.details.slice(0, 100) + "..."
                      : project?.details?.length < 10
                      ? "Details not available"
                      : project.details
                  }
                />

                <div className="mt-auto flex justify-end">
                  <Link href={`/projects/${project._id}`}>
                    <button className="text-primaryColor font-extrabold text-sm bg-card border-none custom-bg px-3 py-2">
                      Full Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
