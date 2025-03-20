
import SkillCreateForm from '@/components/skills'


const ManageSkillsPage = () => {

    // console.log(process.env.NEXT_PUBLIC_API_URL);

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