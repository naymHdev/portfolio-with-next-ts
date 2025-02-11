import NHReactMarkdown from "@/components/ui/ReactMarkdown";
import { TProject } from "@/lib/models/Project.model.";
import { fetchData } from "@/utils/fetchData";
import Image from "next/image";

interface ProjectDetailsProps {
  params: { id: string };
}

const ProjectDetailsPage = async ({ params }: ProjectDetailsProps) => {
  const { id } = params;

  const projects: TProject[] | null = await fetchData("/api/project");

  const projectDetails = projects?.filter((itm) => itm._id === id);

  return (
    <>
      <section>
        {projectDetails?.map((details) => (
          <div key={details._id}>
            <h2 className=" text-4xl font-semibold text-title">
              {details.projectName}
            </h2>
            <div className="mb-10 flex flex-col items-center gap-6 mt-8">
              {details.images.map((img, index) => (
                <div key={index}>
                  <Image
                    src={img}
                    alt="Project Image"
                    layout="responsive"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-t-lg"
                  />
                </div>
              ))}
            </div>
            <NHReactMarkdown content={details?.details} />
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectDetailsPage;
