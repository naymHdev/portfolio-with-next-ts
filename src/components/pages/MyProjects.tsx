"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";

export const projectsData = [
  {
    id: 1,
    projectName: "Hilf Al Fudul",
    details:
      "A Charity Platform. Browse a curated list of charitable organizations tackling important issues.",
    images: [
      "/projectsImages/hilf1.png",
      "/projectsImages/hilf2.png",
      "/projectsImages/hilf3.png",
      "/projectsImages/hilf4.png",
    ],
    metadata: {
      duration: "1 months",
      role: "Full Stack Developer",
      teamSize: 1,
      completionDate: "January 2024",
    },
    keyFeatures: [
      "User authentication and authorization",
      "Browse and search for different charity causes",
      "Donate to causes",
      "Admin panel to manage causes",
      "Join as a volunteer to support causes",
      "Membership plans for recurring donations",
      "User dashboard to track donations and activities",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
      "React Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
    ],
    links: {
      liveLink: "https://hilful-fujul-client.vercel.app",
      frontend: "https://github.com/naymHdev/Hilful-Fujul-Client",
      backend: "https://github.com/naymHdev/Hilf-Al-Fudul-Server",
      nextJS: "",
    },
  },
  {
    id: 2,
    projectName: "Online Translator",
    details:
      "Delta Translator is a collaborative effort to develop a user-friendly language translation platform.",
    images: [
      "/projectsImages/translate1.png",
      "/projectsImages/translate2.png",
      "/projectsImages/translate3.png",
      "/projectsImages/translate4.png",
      "/projectsImages/translate5.png",
    ],
    metadata: {
      duration: "2 months",
      role: "MERN Stack Developer",
      teamSize: 6,
      completionDate: "March 2024",
    },
    keyFeatures: [
      "Speech-to-Text: Translate spoken words through speech recognition.",
      "Email JS Integration: Streamline contact form submissions with email forwarding.",
      "Copy to Clipboard: Easily copy translated text for sharing or reference.",
      "Admin Dashboard: Manages user messages and platform settings.",
      "Redux Toolkit & mymemory.translate API: Handles user input, translates text, and stores data.",
      "Admin Dashboard - User Management: Manages user accounts, feedback, and statistics.",
      "PDF Text Extraction & Translation: Translate text from uploaded PDF documents.",
      "Downloadable Translations: Save translated text for offline use.",
      "Text-to-Speech: Listen to translated text for enhanced accessibility.",
      "Swipe Functionality: Improves user interaction through swiping gestures.",
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
    ],
    links: {
      liveLink: "https://delta-translator-ac8d6.web.app",
      frontend: "https://github.com/deltatranslator/translator-delta-client",
      backend: "https://github.com/deltatranslator/translator-delta-server",
      nextJS: "",
    },
  },
  {
    id: 3,
    projectName: "PrimeWave Solutions",
    details:
      "PrimeWave Solutions – Custom Web Design & Development for Remodelers At PrimeWave Solutions, I specialize in designing and developing responsive, dynamic websites tailored for home remodeling contractors. My goal is to help remodelers like kitchen, bathroom, and cabinet specialists boost their online presence, attract more leads, and grow their business. I focus on creating modern, user-friendly websites that showcase their work and make it easy for potential clients to connect",
    images: [
      "/projectsImages/prime1.png",
      "/projectsImages/prime2.png",
      "/projectsImages/prime3.png",
      "/projectsImages/prime4.png",
    ],
    metadata: {
      duration: "1 Weeks",
      role: "Full Stack Developer",
      teamSize: 1,
      completionDate: "October 2024",
    },
    keyFeatures: [
      "Speech-to-Text: Translate spoken words through speech recognition.",
      "Email JS Integration: Streamline contact form submissions with email forwarding.",
      "Copy to Clipboard: Easily copy translated text for sharing or reference.",
      "Admin Dashboard: Manages user messages and platform settings.",
      "Redux Toolkit & mymemory.translate API: Handles user input, translates text, and stores data.",
      "Admin Dashboard - User Management: Manages user accounts, feedback, and statistics.",
      "PDF Text Extraction & Translation: Translate text from uploaded PDF documents.",
      "Downloadable Translations: Save translated text for offline use.",
      "Text-to-Speech: Listen to translated text for enhanced accessibility.",
      "Swipe Functionality: Improves user interaction through swiping gestures.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Git",
      "GitHub",
      "Vercel",
    ],
    links: {
      liveLink: "https://primewavesolutions.vercel.app",
      frontend: "",
      backend: "",
      nextJS: "",
    },
  },
  {
    id: 4,
    projectName: "Fintex Fitness",
    details:
      "Log exercises, set personalized goals, and apply for a dedicated trainer. Seamlessly monitor progress, celebrate achievements, and stay motivated on your path to a healthier lifestyle.",
    images: [
      "/projectsImages/fit2.png",
      "/projectsImages/fit1.png",
      "/projectsImages/fit3.png",
      "/projectsImages/fit4.png",
      "/projectsImages/fit5.png",
      "/projectsImages/fit6.png",
    ],
    metadata: {
      duration: "8 Days",
      role: "MERN Stack Developer",
      teamSize: 1,
      completionDate: "November 2023",
    },
    keyFeatures: [
      "Tailor your fitness routine with personalized workout plans based on your goals, fitness level, and preferences for a more effective and enjoyable experience.",
      "Monitor your daily activities, from steps taken and calories burned to specific exercises performed, providing a holistic view of your fitness journey.",
      "Access nutrition guidance and create customized meal plans to complement your fitness goals. Ensure a well-rounded approach to health by combining effective workouts with proper nutrition.",
      "Engage with a supportive fitness community, share achievements, and participate in challenges. Connect with like-minded individuals, fostering motivation and accountability in your fitness pursuits.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
      "Vercel",
    ],

    links: {
      liveLink: "https://fintex-fitness-client-code.vercel.app",
      frontend: "https://github.com/naymHdev/Fintex-Fitness-Client-Code",
      backend: "https://github.com/naymHdev/Fintex-Fitness-Server-Code",
      nextJS: "",
    },
  },
  {
    id: 5,
    projectName: "Web Works Wizards",
    details:
      "This project aims to streamline IT service requests, incident management, and resource allocation within organizations, enhancing operational efficiency and customer satisfaction.",
    images: [
      "/projectsImages/web1.png",
      "/projectsImages/web2.png",
      "/projectsImages/web3.png",
      "/projectsImages/web4.png",
      "/projectsImages/web5.png",
    ],
    metadata: {
      duration: "3 Days",
      role: "MERN Stack Developer",
      teamSize: 1,
      completionDate: "April 2024",
    },
    keyFeatures: [
      "Clients can view project details, timelines, and updates in real time.",
      "Fully responsive interface optimized for desktop, tablet, and mobile devices.",
      "Display information about the company, mission, and vision.",
      "Highlight the company's expertise in MERN stack and technology solutions.",
      "Showcase various IT services like web development, mobile app development, cloud services, and more.",
      "Showcase client feedback and success stories.",
      "Option for users to book consultations or inquire about specific services.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "React Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
      "Vercel",
    ],
    links: {
      liveLink: "https://web-works-wizards.vercel.app",
      frontend: "https://github.com/naymHdev/WebWorks-Wizards",
      backend: "",
      nextJS: "",
    },
  },
];

const MyProjects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the skeleton (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="h-full flex flex-col animate-pulse">
                  {/* Skeleton for the image */}
                  <div className="bg-[#122b3c] h-64 w-full rounded-md"></div>

                  {/* Skeleton for text and button */}
                  <div className="p-3 flex-grow flex flex-col">
                    <div className="h-6 bg-[#122b3c] w-3/4 mb-2 rounded"></div>
                    <div className="h-4 bg-[#122b3c] w-1/2 mb-4 rounded"></div>
                    <div className="mt-auto flex justify-end">
                      <div className="h-10 w-24 bg-[#122b3c] rounded"></div>
                    </div>
                  </div>
                </div>
              ))
          : projectsData?.map((project, index) => (
              <div
                key={index}
                className="border border-primaryColor bg-card custom-bg h-full flex flex-col"
              >
                
                <div className="p-3 flex-grow flex flex-col">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-title">
                      {project?.projectName}
                    </h2>
                    <a
                      href={project?.links?.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="text-primaryColor text-lg" />
                    </a>
                  </div>
                  <p className="my-2 font-medium text-foreground">
                    {project?.details?.length > 150
                      ? project.details.slice(0, 150) + "..."
                      : project?.details?.length < 10
                      ? "Details not available"
                      : project.details}
                  </p>

                  <div className="mt-auto flex justify-end">
                    <Link
                      href={`/project/${encodeURIComponent(
                        project.projectName
                      )}`}
                    >
                      <button className="text-primaryColor font-extrabold text-sm bg-card border-none custom-bg px-3 py-2">
                        Full Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default MyProjects;
