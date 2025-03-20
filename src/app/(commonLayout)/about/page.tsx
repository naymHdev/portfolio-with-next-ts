import TicTacToe from "@/components/games/TicTacToe";
import GithubStats from "@/components/GitHubStats";
import MobileDeviceAbout from "@/components/MobileDeviceAbout";
import ProfileImage from "@/components/ProfileImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Naym Hossen",
  description: "Learn more about me, my journey, and my skills.",
};

const AboutUs = () => {
  return (
    <>
      <ProfileImage />
      <div className="md:hidden flex">
        <MobileDeviceAbout />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-7 gap-4 mt-16 md:mt-10">
        <div className="col-span-full md:col-span-4">
          <p className="text-md md:text-lg font-medium text-foreground">
            As a Full-Stack Web Developer, I craft seamless digital experiences that blend performance, aesthetics, and functionality. With <span className=" text-primaryColor font-semibold">JavaScript</span> at the core, I build dynamic applications using React.js, Next.js, and the power of Jamstack for speed, scalability, and security.
            <br />
            <br />
            To me, coding is more than logic—it’s creativity in motion. Every project is an <span className=" text-primaryColor font-semibold">opportunity</span> to innovate, refine, and push the boundaries of what’s possible on the web.
          </p>


        </div>
        <div className="col-span-full md:col-span-3">
          <div className="text-start">
            <h1 className="text-xl mb-1 font-bold text-title">Lets play</h1>
            <h1 className="text-4xl mb-5 font-bold text-primaryColor">
              Tic tac toe
            </h1>
          </div>
          <TicTacToe />
        </div>
      </div>
      <section className="mt-16 flex items-center gap-4">
        <div>
          <h3 className="text-6xl font-extrabold text-primaryColor">01+</h3>
          <p className="file-input-md text-lg text-foreground">
            Years of Experience
          </p>
        </div>
        <div>
          <h3 className="text-6xl font-extrabold text-primaryColor">20+</h3>
          <p className="file-input-md text-lg text-foreground">
            Projects Completed
          </p>
        </div>
      </section>
      <GithubStats />
    </>
  );
};

export default AboutUs;
