import SkillList from "@/components/skills/SkillList"
import UploadSkill from "@/components/skills/UploadSkill"
import { ISkill } from "@/types/skill";
import { fetchData } from "@/utils/fetchData";


interface IManageSkillsPageProps {
    skills: ISkill[] | null;
}

const ManageSkillsPage = async () => {

    const data: IManageSkillsPageProps | null = await fetchData("/api/skills", {
        next: {
            revalidate: 5
        }
    });
    const skills: ISkill[] = data?.skills ?? [];

    return (
        <>
            <div className=" flex justify-between items-center">
                <p className=" text-lg font-bold text-primary-content">Management Core Skills</p>
                <UploadSkill />
            </div>
            <div className=''>
                <SkillList skills={skills} />
            </div>
        </>
    )
}

export default ManageSkillsPage