"use client";

import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { BsMailbox, BsPhone, BsGeoAlt } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { fetchData } from "@/utils/fetchData";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const MessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  sendTime: z.date().optional(),
});

type MessageFormData = z.infer<typeof MessageSchema>;

interface MessageResponse {
  message: string;
  data: MessageFormData;
}

const GetInTouch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { register, handleSubmit, reset } = useForm<MessageFormData>({
    resolver: zodResolver(MessageSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const sendMessage = { ...data, sendTime: new Date() };
    // console.log(data, "sendMessage", sendMessage);

    try {
      const response = await fetchData<MessageResponse>("/api/message", {
        method: "POST",
        body: JSON.stringify(sendMessage),
      });

      if (!response) throw new Error("Invalid response from server");

      // console.log("Project created:", response);

      reset();
      toast.success("Thank you for reaching out!");
    } catch {
      // console.error("Message sending failed", error);
      toast.error("Sorry, please try again!");
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        className="text-primaryColor font-semibold md:font-extrabold md:text-xl flex items-center gap-2"
        onClick={openModal}
      >
        <BsMailbox className="md:text-2xl" />
        Get in touch
      </button>

      {/* Modal */}
      {isModalOpen && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle w-full mx-auto p-4 sm:p-6"
          open
        >
          <div className="modal-box bg-card text-foreground">
            {/* Modal header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FaPenFancy className="text-3xl text-title" />
                <h2 className="text-title font-extrabold text-3xl">
                  Write to me
                </h2>
              </div>
              {/* Close button */}
              <button onClick={closeModal} className="modal-action">
                <MdOutlineClose className="text-2xl text-title" />
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 text-lg">
                <BsPhone className="text-xl text-primaryColor" />
                <p className="text-foreground font-medium">01770064053</p>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <HiOutlineMail className="text-xl text-primaryColor" />
                <p className="text-foreground font-medium">
                  naymhossen09@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <BsGeoAlt className="text-xl text-primaryColor" />
                <p className="text-foreground font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-inherit focus:outline-none border-primaryColor border-b p-2 text-foreground"
                  required
                  {...register("name")}
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full bg-inherit focus:outline-none border-primaryColor border-b p-2 text-foreground"
                  required
                  {...register("email")}
                />
              </div>

              <div className="form-control mt-8">
                <textarea
                  placeholder="Your Message"
                  className="w-full bg-inherit focus:outline-none border-primaryColor border-b p-2 text-foreground"
                  required
                  {...register("message")}
                ></textarea>
              </div>

              {/* Modal actions */}
              <div className="modal-action mt-8">
                <button
                  type="submit"
                  className="px-5 bg-card custom-bg text-title py-2 rounded-sm font-bold hover:text-foreground"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default GetInTouch;
