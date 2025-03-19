import CreateExperienceForm from "@/components/experience/CreateExperience"
import ExperienceCard from "@/components/experience/ExperienceCard";
import { IExperience } from "@/lib/models/experience.model";
import { fetchData } from "@/utils/fetchData";


const ExpereienceManagePage = async () => {

    const experience: IExperience[] | null = await fetchData("/api/experience", {
        next: {
            revalidate: 30,
        },
    });

    if (experience && experience.length === 0) {
        return (
            <p className="text-sm font-medium text-secondary text-center mt-20">
                No experience <span className="mx-1">•</span> found.
            </p>
        );
    }

    return (
        <>
            <div className=" flex justify-between items-center">
                <p className=" text-lg font-bold text-primary-content">Expereience Manage Page</p>
                <CreateExperienceForm />
            </div>
            <div className=" mt-5">
                {
                    experience && experience?.map((exp) => <ExperienceCard key={exp._id} experience={exp} />)
                }
            </div>
        </>
    )
}

export default ExpereienceManagePage