"use client";
import MobileSidebar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";
import { ThemeButton } from "@/components/ThemeButton";
import { Button } from "@/components/ui/button";
import {
  DogIcon,
  File,
  FileJson,
  HelpCircleIcon,
  ScanLine,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = () => {
  const path = usePathname();
  const features = [
    {
      id: 1,
      featureName: "Resume Builder",
      route: "/dashboard/resume-builder",
      disp: "lorem ipsum dajks dsa dkasj hdjksa dk ahskdjh askj das d",
      icon: Wrench,
    },
    {
      id: 2,
      featureName: "Resume Analyzer",
      route: "/dashboard/resume-analyzer",
      disp: "lorem ipsum dajks dsa dkasj hdjksa dk ahskdjh askj das d",
      icon: ScanLine,
    },
    {
      id: 1,
      featureName: "Code Chat",
      route: "/dashboard/code-chat",
      disp: "lorem ipsum dajks dsa dkasj hdjksa dk ahskdjh askj das d",
      icon: FileJson,
    },
  ];
  return (
    <main className="w-full h-full ">
      <div>
        <h1 className="font-bold">Features</h1>
        <p className="text-muted-foreground">
          Here you can see features of ProfilePro
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-10 py-10">
        {features.map((f) => (
          <Link
            href={f.route}
            className="p-5 md:p-10 border border-muted rounded-md hover:shadow-sm hover:shadow-primary hover:scale-105 transition-all duration-500"
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="w-fit bg-secondary p-5 rounded-full ">
                <f.icon className="w-10 h-10 text-primary" />
              </span>
              <h5 className="font-medium">{f.featureName}</h5>
              <p className="text-sm text-muted-foreground">{f.disp}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Layout;
