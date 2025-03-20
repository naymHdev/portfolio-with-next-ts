import ProjectCard from "@/components/ui/ProjectCard";
import { TProject } from "@/lib/models/Project.model.";
import { fetchData } from "@/utils/fetchData";
import Link from "next/link";

const ProjectManagement = async () => {
  const projects: TProject[] | null = await fetchData("/api/project", {
    next: {
      revalidate: 30,
    },
  });

  if (projects && projects.length === 0) {
    return (
      <p className="text-sm font-medium text-secondary text-center mt-20">
        No projects <span className="mx-1">•</span> found.
      </p>
    );
  }

  return (
    <section>
      <div>
        <div>
          <Link href="/dashboard/projects/create-project">
            <button className=" custom-bg px-4 py-2 text-white hover:scale-110 duration-300 transition-transform">
              Create Project
            </button>
          </Link>
        </div>

        <div className=" mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects &&
            projects?.length > 0 &&
            projects?.map((project: TProject) => (
              <ProjectCard key={project._id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
