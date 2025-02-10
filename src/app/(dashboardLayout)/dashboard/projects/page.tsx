import Link from "next/link";

const ProjectManagement = () => {
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
      </div>
    </section>
  );
};

export default ProjectManagement;
