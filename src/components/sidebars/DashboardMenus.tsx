"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DashboardMenus = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Blog Management", path: "/dashboard/blogs" },
    { name: "Project Management", path: "/dashboard/projects" },
    { name: "Messages Management", path: "/dashboard/messages" },
    { name: "Experience Management", path: "/dashboard/experience" },
  ];

  return (
    <ul className="p-6 space-y-1 mt-14">
      {menuItems.map(({ name, path }) => (
        <li key={path}>
          <Link
            href={path}
            className={`block p-2 rounded hover:bg-card hover:text-primaryColor ${pathname === path ? "bg-card text-primaryColor" : ""
              }`}
          >
            {name}
          </Link>
        </li>
      ))}
      <li>
        <button
          onClick={() => signOut()}
          className="block w-full text-left p-2 rounded hover:bg-card text-primaryColor"
        >
          Sign Out
        </button>
      </li>
      {/* {session?.user?.email ? (
        <li>
          <button
            onClick={() => signOut()}
            className="block w-full text-left p-2 rounded hover:bg-card text-primaryColor"
          >
            Sign Out
          </button>
        </li>
      ) : (
        <li>
          <Link
            href="/login"
            className={`block p-2 rounded hover:bg-card hover:text-primaryColor ${pathname === "/login" ? "bg-card text-primaryColor" : ""
              }`}
          >
            Sign In
          </Link>
        </li>
      )} */}
    </ul>
  );
};
