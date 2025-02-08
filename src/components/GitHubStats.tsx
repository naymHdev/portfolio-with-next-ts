/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import ItemLayout from "./ui/ItemLayout";

const GithubStats = () => {
  return (
    <>
      <section className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full mt-12">
        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=naymHdev&theme=transparent&hide_border=true&title_color=22ACF5&text_color=9FBBD0&icon_color=FEFE5B&text_bold=false"
            alt="Naym Hossen"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=naymHdev&theme=transparent&hide_border=true&title_color=22ACF5&text_color=9FBBD0&icon_color=FEFE5B&text_bold=false"
            alt="Naym Hossen"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=html,css,tailwind,bootstrap,figma,firebase,git,github,js,ts,jquery,mongodb,netlify,nodejs,express,react,redux,nextjs,vercel,vite,vscode,npm,yarn,pnpm"
            alt="Naym Hossen"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com/?user=naymHdev&theme=dark&hide_border=true&type=svg&background=EB545400&ring=1E96D5&currStreakLabel=1E96D5"
            alt="Naym Hossen"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <Link
            href="https://github.com/naymHdev"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=naymHdev&repo=Learn-Python&theme=transparent&hide_border=true&title_color=22ACF5&text_color=9FBBD0&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="Naym Hossen"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </section>
    </>
  );
};

export default GithubStats;
