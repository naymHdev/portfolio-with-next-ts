import NHReactMarkdown from "@/components/ui/ReactMarkdown";
import { TProject } from "@/lib/models/Project.model.";
import { fetchData } from "@/utils/fetchData";
import Image from "next/image";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  const project: TProject | null = await fetchData(`/api/project/${id}`);

  // console.log('project', project);

  return (
    <>
      <section>
        <div>
          <h2 className=" text-4xl font-semibold text-title">
            {project?.projectName}
          </h2>
          <div className="mb-10 flex flex-col items-center gap-6 mt-8">
            {project?.images.map((img, index) => (
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
          <NHReactMarkdown content={project?.details} />
        </div>
      </section>
    </>
  );
};

export default ProjectDetailsPage;
