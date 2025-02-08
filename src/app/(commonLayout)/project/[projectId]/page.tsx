"use client";
import { Suspense } from "react";
import { useParams } from "next/navigation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoArrowRedoCircle } from "react-icons/io5";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const cleanName = decodeURIComponent(projectId);

  const projects = projectsData?.filter(
    (project) => project.projectName == cleanName
  );

  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-title">
        {cleanName}
      </h1>
      <Suspense fallback={<Loading />}>
        <section>
          {projects?.map((project) => (
            <div key={project.id} className="mb-12">
              {/* Project Details */}
              <div>
                <p className="text-foreground font-medium text-base sm:text-lg mt-3">
                  {project.details}
                </p>

                {/* Project Metadata */}
                <div className="mt-6 sm:mt-8 space-y-2">
                  <p className="font-bold text-title">
                    Role:
                    <span className="font-medium text-foreground px-1">
                      {project.metadata.role}
                    </span>
                  </p>
                  <p className="font-bold text-title">
                    Duration:{" "}
                    <span className="font-medium text-foreground px-1">
                      {project.metadata.duration}
                    </span>
                  </p>
                  <p className="font-bold text-title">
                    Completion Date:
                    <span className="font-medium text-foreground px-1">
                      {project.metadata.completionDate}
                    </span>
                  </p>
                  <p className="font-bold text-title">
                    Team Size:{" "}
                    <span className="font-medium text-foreground px-1">
                      {project.metadata.teamSize}
                    </span>
                  </p>
                </div>
              </div>

              {/* Project Images */}
              <div className="mt-8 sm:mt-10">
                <CardImage images={project.images} details={project.details} />
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primaryColor mt-8 sm:mt-10 mb-4">
                  Key Features
                </h2>
                <ul className="mt-4 space-y-3 text-foreground font-medium">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <IoArrowRedoCircle className="text-title text-lg sm:text-xl" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primaryColor mt-8 sm:mt-10 mb-4">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 text-sm sm:text-base text-primaryColor bg-card transition-all hover:bg-[#061a2a] custom-bg"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Source Code Links */}
              {(project.links.backend ||
                project.links.frontend ||
                project.links.nextJS) && (
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primaryColor mt-8 sm:mt-10 mb-4">
                    Source Code
                  </h2>
                  <div className="flex flex-wrap gap-4 text-lg sm:text-xl font-bold text-title">
                    {project.links.frontend && (
                      <a
                        className="flex items-center gap-2"
                        href={project.links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        Frontend
                        <FaExternalLinkAlt className="text-primaryColor text-sm" />
                      </a>
                    )}
                    {project.links.backend && (
                      <a
                        className="flex items-center gap-2"
                        href={project.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        Backend
                        <FaExternalLinkAlt className="text-primaryColor text-sm" />
                      </a>
                    )}
                    {project.links.nextJS && (
                      <a
                        className="flex items-center gap-2"
                        href={project.links.nextJS}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                        Next.js
                        <FaExternalLinkAlt className="text-primaryColor text-sm" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      </Suspense>
    </>
  );
};

export default ProjectDetails;
