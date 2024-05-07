"use client";
import AuthComponent from "@/components/AuthComponent";
import MobileSidebar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";
import { ThemeButton } from "@/components/ThemeButton";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isAuthenticated } = useKindeBrowserClient();

  let route = usePathname();
  let routeArray = route.split("/");
  let path;
  routeArray.find((path) => {
    return path === "playground";
  })
    ? (path = "playground")
    : null;

  return isAuthenticated ? (
    <div className="">
      <div className="h-full  overflow-hidden">
        <div className="lg:flex h-full">
          {/* pc dashboard sidebar */}
          {path !== "playground" ? (
            <div className="hidden lg:block w-[270px] xl:w-[300px] h-full ">
              <Sidebar />
            </div>
          ) : null}

          {/* childrens: Dynamic Section */}
          <div className="w-full h-full flex flex-col ">
            <div
              className={`flex justify-between lg:justify-end ${
                path === "playground" ? "lg:justify-between" : "lg:justify-end"
              } items-center border-b border-muted p-5  py-5 md:px-10 lg:px-10 `}
            >
              <Link
                className={`cursor-pointer text-[1.8rem] font-semibold inline  ${
                  path === "playground" ? "lg:inline" : "lg:hidden"
                }`}
                href="/"
              >
                ProfilePro
                <span className="text-[#0000ff] font-extrabold text-3xl">
                  .
                </span>
              </Link>
              <div className="flex gap-2 md:gap-4 justify-end items-center">
                <ThemeButton />
                <AuthComponent />
                {/* mobile dashboard sidebar */}
                <div className="lg:hidden h-full flex items-center">
                  <MobileSidebar />
                </div>
              </div>
            </div>
            <div className="h-full w-full overflow-hidden p-5  py-5 md:px-10 lg:px-10 ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen w-screen text-muted-foreground text-sm">
      You have to{" "}
      <Button variant="link">
        {" "}
        <LoginLink>Login</LoginLink>
      </Button>{" "}
      to see this page
    </div>
  );
};

export default DashboardLayout;
