
import SkillCreateForm from '@/components/skills'


const ManageSkillsPage = () => {
    return (
        <>
            <div className=" flex justify-between items-center">
                <p className=" text-lg font-bold text-primary-content">Management Core Skills</p>
                <SkillCreateForm />
            </div>
            <div className='flex flex-wrap gap-4'>
            </div>
        </>
    )
}

export default ManageSkillsPage