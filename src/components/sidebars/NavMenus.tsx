"use client";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import GetInTouch from "../GetInTouch";

const NavMenus = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="">
        <div className="grid space-y-3 mt-16 text-title font-semibold">
          <Link href="/about" className="hover:text-primaryColor">
            <div className="group flex items-center gap-3">
              <p
                className={`text-base ${
                  pathname == "/about"
                    ? "text-primaryColor"
                    : "group-hover:text-primaryColor"
                } `}
              >
                About
              </p>
              <div className="border-b border-b-primaryColor w-10 group-hover:w-20 transition-all duration-300" />
            </div>
          </Link>
          <Link href="/experience" className="hover:text-primaryColor">
            <div className="group flex items-center gap-3">
              <p
                className={`text-base ${
                  pathname == "/experience"
                    ? "text-primaryColor"
                    : "group-hover:text-primaryColor"
                } `}
              >
                Experience
              </p>
              <div className="border-b border-b-primaryColor w-10 group-hover:w-20 transition-all duration-300" />
            </div>
          </Link>
          <Link href="/projects" className="hover:text-primaryColor group">
            <div className="group flex items-center gap-3">
              <p
                className={`text-base ${
                  pathname == "/projects"
                    ? "text-primaryColor"
                    : "group-hover:text-primaryColor"
                } `}
              >
                Projects
              </p>
              <div className="border-b border-b-primaryColor w-10 group-hover:w-20 transition-all duration-300" />
            </div>
          </Link>
          <Link href="/skills" className="hover:text-primaryColor">
            <div className="group flex items-center gap-3">
              <p
                className={`text-base ${
                  pathname == "/skills"
                    ? "text-primaryColor"
                    : "group-hover:text-primaryColor"
                } `}
              >
                Skills
              </p>
              <div className="border-b border-b-primaryColor w-10 group-hover:w-20 transition-all duration-300" />
            </div>
          </Link>
          <Link href="/blogs" className="hover:text-primaryColor">
            <div className="group flex items-center gap-3">
              <p
                className={`text-base ${
                  pathname == "/blogs"
                    ? "text-primaryColor"
                    : "group-hover:text-primaryColor"
                } `}
              >
                Blogs
              </p>
              <div className="border-b border-b-primaryColor w-10 group-hover:w-20 transition-all duration-300" />
            </div>
          </Link>
        </div>
      </div>

      {/* contact us section with social icon */}
      <section className="mt-24 flex items-center justify-between">
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
    </>
  );
};

export default NavMenus;
