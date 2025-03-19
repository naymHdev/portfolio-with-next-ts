"use client"

const SkillCreateForm = () => {

    const openModal = () => {
        const modal = document.getElementById("skill_modal") as HTMLDialogElement | null;
        modal?.showModal();
    };

    return (
        <>
            <div>
                <button onClick={openModal} className=" custom-bg px-4 py-2 text-white hover:scale-110 duration-300 transition-transform">
                    Create Skill
                </button>
                <dialog id="skill_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default SkillCreateForm