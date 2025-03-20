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



    return (
        <>
            <div className=" flex justify-between items-center">
                <p className=" text-lg font-bold text-primary-content">Expereience Manage Page</p>
                <CreateExperienceForm />
            </div>
            <div className=" mt-5">
                {
                    experience && experience?.length > 0 ? experience?.map((exp) => <ExperienceCard key={exp._id} experience={exp} />) : <p className="text-sm font-medium text-primaryColor text-center mt-20">
                        No experience <span className="mx-1">•</span> found.
                    </p>
                }
            </div>
        </>
    )
}

export default ExpereienceManagePage