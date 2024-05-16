"use client";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { RiMenu4Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { RiMenu3Line } from "react-icons/ri";
import { ThemeButton } from "../ThemeButton";
import { Button } from "../ui/button";

const Navbar = () => {
  const path = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const [showTopBanner, setShowTopBanner] = React.useState(false);
  const { isAuthenticated } = useKindeBrowserClient();
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleTopBanner = () => {
    setShowTopBanner(!showTopBanner);
  };

  return (
    <>
      {showTopBanner ? (
        <div className="transition-all duration-1000 text-[3.75vw] md:text-[14px] bg-[url(https://images.pexels.com/photos/10461974/pexels-photo-10461974.jpeg?auto=compress&cs=tinysrgb&w=6000)] bg-center bg-no-repeat px-10 py-4  tracking-wider bg-cover text-white relative">
          <button
            className="absolute lg:top-4 lg:right-10 hidden lg:inline-block z-40"
            onClick={handleTopBanner}
          >
            <AiOutlineClose />
          </button>
          <h6 className="text-center font-[400]">
            80% OFF : If you want web services then its a best time!{" "}
            <Link className="text-md font-bold underline" href="#">
              Explore Services
            </Link>
          </h6>
        </div>
      ) : null}

      <div className=" inline lg:hidden  z-40 relative ">
        {/* for mobile */}
        <div className="container pt-4 pb-3  w-full text-white  backdrop-blur-sm">
          {/* border-b border-gray-700 */}
          <div className="  flex justify-between items-center gap-4 px-4 md:gap-44">
            <div className="flex items-center  ">
              <Link
                className="cursor-pointer text-[1.3rem] font-semibold"
                href="/"
              >
                ProfilePro
                <span className="text-[#0000ff] font-extrabold text-3xl">
                  .
                </span>
              </Link>
            </div>
            {/* <ThemeButton /> */}
            <div className="ml-2 transition-all  duration-1000">
              {!showMenu ? (
                <button
                  className="text-3xl  font-extrabold mr-3 brightness-200"
                  onClick={handleClick}
                >
                  <RiMenu4Line />
                </button>
              ) : (
                <button
                  className="text-3xl  font-extrabold mr-3 brightness-200"
                  onClick={handleClick}
                >
                  <RxCross2 />
                </button>
              )}
            </div>
          </div>
          <div className="mb-2 transition-all duration-1000 flex  items-center justify-between">
            {/* <div> */}
            {showMenu === true ? (
              <div className="relative  w-full   py-1">
                <div className="absolute backdrop-blur-3xl  bg-black  rounded-b-3xl   h-screen w-full text-2xl  p-10">
                  <div className="flex justify-evenly  w-full h-full flex-col">
                    <div className="text-center flex items-center justify-center gap-2">
                      <span className="bg-[#0000ff] p-2 font-bold rounded-full text-xs">
                        01
                      </span>
                      <Link
                        className={`brightness-200 text-[2rem] font-bold ${
                          path == "/project"
                            ? "text-indigo-800 "
                            : "text-inherit"
                        }`}
                        href="/project"
                      >
                        Projects
                      </Link>
                    </div>
                    <div className="text-center flex items-center justify-center gap-2">
                      <span className="bg-[#0000ff] p-2 font-bold rounded-full text-xs">
                        01
                      </span>
                      <Link
                        className={`brightness-200 text-[2rem] font-bold ${
                          path == "/blog" ? "text-indigo-800 " : "text-inherit"
                        }`}
                        href="/blog"
                      >
                        Blog
                      </Link>
                    </div>
                    <div className="text-center flex items-center justify-center gap-2">
                      <span className="bg-[#0000ff] p-2 font-bold rounded-full text-xs">
                        01
                      </span>
                      <Link
                        className={`brightness-200 text-[2rem] font-bold ${
                          path == "/services"
                            ? "text-indigo-800 "
                            : "text-inherit"
                        }`}
                        href="/services"
                      >
                        Services
                      </Link>
                    </div>
                    <div className="text-center flex items-center justify-center gap-2">
                      <span className="bg-[#0000ff] p-2 font-bold rounded-full text-xs">
                        01
                      </span>
                      <Link
                        className={`brightness-200 text-[2rem] font-bold ${
                          path == "/fun" ? "text-indigo-800 " : "text-inherit"
                        }`}
                        href="/fun"
                      >
                        Chill Zone
                      </Link>
                    </div>
                    {/* icons */}
                    <div className="flex items-center justify-center gap-6 md:gap-8">
                      <Link
                        className="hover:scale-110 hover:text-white transition-all duration-300 text-4xl"
                        href="https://github.com/tanuj830"
                      >
                        <AiFillGithub />
                      </Link>
                      <Link
                        className="hover:scale-110 hover:text-white transition-all duration-300 text-4xl"
                        href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/"
                      >
                        <AiFillLinkedin />
                      </Link>
                      <Link
                        className="hover:scale-110 hover:text-white transition-all duration-300 text-4xl"
                        href="https://leetcode.com/tanujdotcpp/"
                      >
                        <SiLeetcode />
                      </Link>
                      <Link
                        className="hover:scale-110 hover:text-white transition-all duration-300 text-4xl"
                        href="https://www.instagram.com/aka_tanuj/"
                      >
                        <AiFillInstagram />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* for pc */}
      <div className="hidden px-4 lg:px-20 lg:inline-block z-50 relative  backdrop-blur-md overflow-hidden	w-full xl:h-20 h-16   ">
        <div className=" flex justify-between items-center  w-full h-full">
          <div className=" flex items-center  h-full">
            <Link
              className="cursor-pointer text-[1.8rem] font-semibold"
              href="/"
            >
              ProfilePro
              <span className=" font-extrabold text-3xl">.</span>
            </Link>
          </div>
          <div className=" flex  items-center gap-x-2 h-full ">
            <ThemeButton />
            {isAuthenticated ? (
              <Button variant={"link"}>
                <LogoutLink postLogoutRedirectURL="/" className="">
                  Sign out
                </LogoutLink>
              </Button>
            ) : (
              <>
                <Button className="flex items-center ">
                  <LoginLink postLoginRedirectURL="/dashboard" className="">
                    Sign in
                  </LoginLink>
                  {/* </Button> */}
                  {/* <Button className="flex items-center " variant={"link"}> */}
                  {/* <RegisterLink postLoginRedirectURL="/resume" className="">
                    Sign up
                  </RegisterLink> */}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
