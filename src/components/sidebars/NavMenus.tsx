"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenus = () => {
  const pathname = usePathname();


  return (
    <>
      <div className="">
        <div className="grid space-y-3 text-title font-semibold">
          <Link href="/about" className="hover:text-primaryColor">
            <div className="group flex items-center gap-3">
              <p
                className={`text-base ${pathname == "/about"
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
                className={`text-base ${pathname == "/experience"
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
                className={`text-base ${pathname == "/projects"
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
                className={`text-base ${pathname == "/skills"
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
                className={`text-base ${pathname == "/blogs"
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

    </>
  );
};

export default NavMenus;
