import Image from "next/image";
import moment from "moment";
import { TBlog } from "@/lib/models/blogModel";

const DashboardBlogCard = ({ blog }: { blog: TBlog }) => {
  const { title, content, image, date, _id } = blog || {};

  return (
    <>
      <section>
        <div className="p-4 flex flex-col md:flex-row justify-between border-b border-[#013f5b] gap-4">
          <div className="flex-1">
            <a href={_id} target="_blank" rel="noopener noreferrer">
              <h2 className="text-2xl font-ubuntu font-semibold text-title hover:text-primaryColor">
                {title}
              </h2>
              <p className=" text-sm font-medium text-foreground">
                {moment(date).format("MMMM D, YYYY")}
              </p>
            </a>
            <div className="mt-2 text-foreground">{content}</div>
            <div className=" flex items-center gap-4 mt-4">
              <button className="custom-bg hover:scale-105 transition-transform px-5 py-2 text-title">
                Update
              </button>
              <button className="custom-bg hover:scale-105 transition-transform px-5 py-2 text-title hover:bg-red-500 hover:border-none">
                Delete
              </button>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <Image
              src={image}
              alt={title}
              width={144}
              height={96}
              className="w-full sm:w-[144px] sm:h-[96px] rounded object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardBlogCard;
