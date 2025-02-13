"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

export const DashboardMenus = () => {
  return (
    <>
      <ul className="p-6 space-y-2 mt-14">
        <li>
          <Link
            href="/"
            className="block p-2 hover:bg-card hover:text-primaryColor rounded"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className="block p-2 hover:bg-card hover:text-primaryColor rounded"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogs"
            className="block p-2 hover:bg-card hover:text-primaryColor rounded"
          >
            Blog Management
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/projects"
            className="block p-2 hover:bg-card hover:text-primaryColor rounded"
          >
            Project Management
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/messages"
            className="block p-2 hover:bg-card hover:text-primaryColor rounded"
          >
            Messages Management
          </Link>
        </li>
        <li onClick={() => signOut()}>
          <Link
            href=""
            className="block p-2 hover:bg-card text-primaryColor rounded"
          >
            Sign Out
          </Link>
        </li>
      </ul>
    </>
  );
};
