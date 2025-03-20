import SkillList from "@/components/skills/SkillList"
import UploadSkill from "@/components/skills/UploadSkill"




const ManageSkillsPage = () => {


    return (
        <>
            <div className=" flex flex-col justify-between items-center">
                <p className=" text-lg font-bold text-primary-content">Management Core Skills</p>
                <UploadSkill />
            </div>
            <div className='flex flex-wrap gap-4'>
                {/* <SkillList /> */}
            </div>
        </>
    )
}

export default ManageSkillsPage