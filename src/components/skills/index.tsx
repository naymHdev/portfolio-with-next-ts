"use client";

import { skillsSchema, SkillFormValues } from "@/types/skill";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import ImageUploader from "../ImageUploader";
import toast from "react-hot-toast";

const SkillCreateForm = () => {
  const modalId = "skill_modal";

  const openModal = () => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    modal?.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    modal?.close();
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SkillFormValues>({
    resolver: zodResolver(skillsSchema),
    defaultValues: {
      title: "",
      image: "",
    },
  });

  const onSubmit: SubmitHandler<SkillFormValues> = async (data) => {
    try {
      console.log("Submitting Skill:", data);
      toast.success("Skill added successfully!");
      closeModal();
    } catch (error) {
      toast.error("Error adding skill.");
    }
  };

  return (
    <div>
      <button onClick={openModal} className="custom-bg px-4 py-2 text-white hover:scale-110 transition-transform">
        Create Skill
      </button>

      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-card">
          <section>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 rounded-lg text-white">
              <h2 className="text-xl font-bold">Add Skill</h2>

              {/* Title Input */}
              <div>
                <label className="block">Title:</label>
                <input
                  {...register("title")}
                  className="w-full p-2 border rounded bg-gray-700"
                  placeholder="Full Stack Developer"
                />
                {errors.title && <p className="text-red-400">{errors.title.message}</p>}
              </div>

              {/* Image Uploader */}
              <div>
                <label className="block">Icon:</label>
                <ImageUploader onImageUpload={(url) => setValue("image", url)} />
                {errors.image && <p className="text-red-400">{errors.image.message}</p>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full py-2 bg-green-500 rounded text-white">
                Add Skill
              </button>
            </form>
          </section>

          <div className="modal-action">
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SkillCreateForm;
