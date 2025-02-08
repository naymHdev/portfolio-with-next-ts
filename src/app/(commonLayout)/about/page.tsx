import TicTacToe from "@/components/games/TicTacToe";
import GithubStats from "@/components/GitHubStats";
import MobileDeviceAbout from "@/components/MobileDeviceAbout";
import ProfileImage from "@/components/ProfileImage";

const AboutUs = () => {
  return (
    <>
      <ProfileImage />
      <div className="md:hidden flex">
        <MobileDeviceAbout />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-7 gap-4 mt-16 md:mt-10">
        <div className="col-span-full md:col-span-4">
          <p className=" text-foreground text-lg font-medium">
            My journey in web development is driven by a diverse range of
            advanced tools and languages, with JavaScript at the core of my
            expertise. I proficiently utilize frameworks like React.js and
            Next.js to create seamless and user-centric websites. Leveraging the
            power of the Jamstack architecture, I develop fast, secure, and
            dynamic web experiences. My design skills ensure each project is not
            only functional but also aesthetically pleasing. Join me as I
            continue to explore new technologies and innovations to shape the
            future of web development.
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
