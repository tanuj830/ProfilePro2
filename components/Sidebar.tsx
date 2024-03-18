"use client";
import {
  Building,
  Code,
  CreditCardIcon,
  Home,
  SearchCheckIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const path = usePathname();

  const dashboardLinks = [
    {
      id: 0,
      text: "Home",
      route: "/dashboard",
      icon: Home,
    },
    {
      id: 1,
      text: "Resume Builder",
      route: "/dashboard/resume-builder",
      icon: Building,
    },
    {
      id: 2,
      text: "Resume Analyzer",
      route: "/dashboard/resume-analyzer",
      icon: SearchCheckIcon,
    },
    {
      id: 3,
      text: "Code Chat",
      route: "/dashboard/code-chat",
      icon: Code,
    },
  ];
  return (
    <aside className="p-5 border-r border-r-secondary h-screen">
      <div className="flex flex-col justify-between h-full">
        <div className="h-fit">
          <div className="">
            <Link
              className="cursor-pointer text-[1.8rem] font-semibold"
              href="/"
            >
              ProfilePro
              <span className="text-[#0000ff] font-extrabold text-3xl">.</span>
            </Link>
          </div>
          <div className="mt-10 flex flex-col ">
            {/* Navlinks */}
            <div className="flex flex-col gap-y-4">
              {dashboardLinks.map((link) => (
                <Link
                  className={`hover:bg-secondary ${
                    path == link.route ? "bg-secondary" : null
                  } p-3 rounded-lg flex items-center gap-2 text-md `}
                  key={link.id}
                  href={link.route}
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  <span>{link.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Link
            className={`bg-primary  p-3 rounded-lg flex items-center gap-2 text-md text-white `}
            href="#"
          >
            <CreditCardIcon className="mr-2 h-4 w-4" />
            <span>Buy Credits</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
