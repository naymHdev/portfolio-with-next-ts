import { TBlog } from "@/lib/models/blogModel";
import moment from "moment";
import Image from "next/image";
import NHReactMarkdown from "./ReactMarkdown";

const BlogDetailsCard = ({ details }: { details: TBlog }) => {
  const { title, content, image, date } = details || {};

  return (
    <>
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <h2 className=" text-4xl font-black text-title my-8">{title}</h2>
        <div className=" flex items-center gap-5 mt-6">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className=" space-y-2">
            <h3 className=" text-title font-semibold">Naym Hossen</h3>
            <p className=" text-sm font-medium text-foreground">
              Published in <span>{moment(date).format("MMMM D, YYYY")}</span>
            </p>
          </div>
        </div>
        <div className=" py-10">
          <NHReactMarkdown content={content?.slice(0, 500)} />
        </div>
        <div className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px]">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          )}
        </div>
        <div className=" py-10">
          <NHReactMarkdown content={content?.slice(501)} />
        </div>
      </div>
    </>
  );
};

export default BlogDetailsCard;
