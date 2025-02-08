import MyProjects from "@/components/pages/MyProjects";
import RouteTitle from "@/components/ui/RouteTitle";

const Projects = () => {
  return (
    <>
      <RouteTitle firstP="My" secondP="Projects" />

      <div className="mt-4 sm:mt-6 lg:mt-10">
        <MyProjects />
      </div>
    </>
  );
};

export default Projects;
