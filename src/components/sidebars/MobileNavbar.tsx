"use client";

import { GiSkills } from "react-icons/gi";
import { FaBlog, FaBusinessTime, FaFolder, FaUserCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";

// Navigation routes with icons and names
export const navRoutes = [
  {
    icon: <FaUserCircle />,
    name: "About",
    route: "/about",
  },
  {
    icon: <FaBusinessTime />,
    name: "Experience",
    route: "/experience",
  },
  {
    icon: <FaFolder />,
    name: "Projects",
    route: "/projects",
  },
  {
    icon: <GiSkills />,
    name: "Skills",
    route: "/skills",
  },
  {
    icon: <FaBlog />,
    name: "Blogs",
    route: "/blogs",
  },
];

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <>
      <footer className="fixed bottom-0 w-full bg-card py-3 z-50">
        <nav className="flex justify-center space-x-8">
          {navRoutes.map((navItem, index) => (
            <a
              key={index}
              href={navItem.route}
              className={`group flex flex-col items-center text-xl ${
                pathname === navItem.route
                  ? "text-primaryColor"
                  : "text-title group-hover:text-primaryColor"
              }`}
            >
              <span className="hover:animate-bounce hover:duration-300 hover:transition-all">
                {navItem.icon}
              </span>
              <span className="text-[12px] font-semibold">{navItem.name}</span>
            </a>
          ))}
        </nav>
      </footer>
    </>
  );
};

export default MobileNavbar;
