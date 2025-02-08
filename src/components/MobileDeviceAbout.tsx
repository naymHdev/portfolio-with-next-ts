"use client";

import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import GetInTouch from "./GetInTouch";

const MobileDeviceAbout = () => {
  return (
    <>
      <section>
        <div>
          <Link href="/">
            <h1 className=" text-4xl md:text-6xl font-extrabold text-title">
              Naym Hossen
            </h1>
          </Link>
          <p className=" text-xl md:text-2xl font-medium md:font-bold mt-1 md:mt-2 text-foreground">
            Full-Stack Web Developer
          </p>
          <p className=" mt-6 font-sourceCode text-foreground">
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
        <div className="mt-14 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              className="hover:-mt-10 transition-all duration-300"
              href="https://github.com/naymHdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              className="hover:-mt-10 transition-all duration-300"
              href="https://www.linkedin.com/in/naymhdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl text-[#31b6f4]" />
            </a>
            <a
              className="hover:-mt-10 transition-all duration-300"
              href="https://web.facebook.com/naymHdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl text-[#3572f5]" />
            </a>
            <a
              className="hover:-mt-10 transition-all duration-300"
              href="https://wa.me/8801770064053"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl text-[#35d2bf]" />
            </a>
          </div>
          <div>
            <GetInTouch />
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileDeviceAbout;
