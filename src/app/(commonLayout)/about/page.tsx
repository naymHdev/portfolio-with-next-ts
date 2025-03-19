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
            Web development isn’t just my profession—it’s my passion. From the first lines of code to the final deployment, I thrive on crafting digital experiences that are fast, intuitive, and visually compelling. With JavaScript at the core of my expertise, I build seamless, interactive applications using modern frameworks like React.js and Next.js. I embrace the power of Jamstack architecture to create high-performance, scalable, and secure websites that push the boundaries of what’s possible.
            <br />
            <br />
            Beyond code, I see development as an art—where design meets functionality, and innovation drives progress. Every project is an opportunity to learn, refine, and create something meaningful. As technology evolves, I remain committed to exploring new tools and techniques that shape the future of the web.
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
