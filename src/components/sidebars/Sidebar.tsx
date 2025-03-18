import Link from "next/link";
import NavMenus from "./NavMenus";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import GetInTouch from "../GetInTouch";

const Sidebar = () => {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col justify-evenly gap-8 h-screen pb-4 sm:pb-6 lg:pb-14">
          {/* Name with Designations */}
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

          {/* Route names with nav menus */}
          <div>
            <NavMenus />
          </div>

          {/* contact us section with social icon */}
          <section className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <a
                className="hover:-mt-10 transition-all duration-300"
                href="https://github.com/naymHdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                className="hover:-mt-10 transition-all duration-300"
                href="https://www.linkedin.com/in/naymhdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-[#31b6f4]" />
              </a>
              <a
                className="hover:-mt-10 transition-all duration-300"
                href="https://web.facebook.com/naymHdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl text-[#3572f5]" />
              </a>
              <a
                className="hover:-mt-10 transition-all duration-300"
                href="https://wa.me/8801770064053"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl text-[#35d2bf]" />
              </a>
            </div>
            <div>
              <GetInTouch />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
