"use client";
import MobileSidebar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";
import { ThemeButton } from "@/components/ThemeButton";
import { DogIcon, HelpCircleIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = () => {
  const path = usePathname();
  return (
    <main className="w-full h-full text-muted-foreground text-sm">
      <div className="flex justify-center h-full items-center">
        Your current route is {path}
      </div>
    </main>
  );
};

export default Layout;
