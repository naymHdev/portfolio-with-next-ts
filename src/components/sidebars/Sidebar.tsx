import Link from "next/link";
import NavMenus from "./NavMenus";
import { UserProps } from "@/types/global.types";

const Sidebar = ({ session }: { session: UserProps | null }) => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <Link href="/">
            <h1 className="font-ubuntu text-3xl lg:text-6xl font-extrabold text-title">
              Naym Hossen
            </h1>
          </Link>
          <p className=" text-2xl font-bold mt-2 text-foreground">
            Full-Stack Web Developer
          </p>
          <p className=" mt-6 font-sourceCode font-semibold text-foreground">
            Full Stack Developer with 1+ years of MERN stack expertise, building
            responsive, scalable web applications.
          </p>
          <div className="group">
            <button className=" text-primaryColor font-extrabold text-lg mt-6">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Get my resume
              </a>
            </button>
            <div className="border-b-2 border-b-title group-hover:border-b-primaryColor w-12 group-hover:w-[125px] mt-[2px] transition-all duration-300" />
          </div>
        </div>
        <div>
          <NavMenus session={session} />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
