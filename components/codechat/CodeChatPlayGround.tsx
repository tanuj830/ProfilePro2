// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import * as io from "socket.io-client";
// import axios from "axios";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// // import JoinRoomPC from "@/components/JoinRoomPC";
// // import JoinRoomMobile from "@/components/JoinRoomMobile";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// import { BsFillPlayFill, BsSendFill } from "react-icons/bs";
// import { BiCopy } from "react-icons/bi";
// import { RiMenu4Line } from "react-icons/ri";
// import Chat from "./Chat";

// const socket = io.connect("https://codeme-backend-socket-io.onrender.com");

// const CodeChatPlayGround = () => {
//   const theme = useTheme();

//   const [roomID, setRoomID] = useState("");
//   const [customInput, setCustomInput] = useState("");
//   const [showOutputSection, setShowOutputSection] = useState(false);
//   const [code, setCode] = useState(""); // code which user writes
//   const [setLang, setSetLang] = useState(""); // language user select
//   const [codeRes, setCodeRes] = useState({} as any); // code response after running code
//   const [chats, setChats] = useState([] as any[]); // all chats incoming and outgoing
//   const [openModel, setOpenModel] = useState(true);
//   const [username, setUsername] = useState("");
//   const [message, setMessage] = useState("");
//   const [chatBox, setChatBox] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [darkTheme, setDarkTheme] = useState(true);

//   const messageEndRef = useRef<HTMLInputElement>(null);
//   const codeOutputRef = useRef<HTMLInputElement>(null);

//   const Languages = [
//     "none",
//     "c",
//     "cpp",
//     "cpp14",
//     "cpp17",
//     "go",
//     "java",
//     "javascript",
//     "python2",
//     "python3",
//     "sql",
//   ];

//   // scrolling to bottom in chatbox
//   useEffect(() => {
//     messageEndRef.current?.scrollIntoView();
//   }, [chats]);

//   const handleChatBox = () => {
//     setChatBox(!chatBox);
//   };

//   const handleTheme = () => {
//     setDarkTheme(!darkTheme);
//   };

//   const handleCode = (e: any) => {
//     setCode(e.target.value);
//   };
//   const handleCustomInput = (e: any) => {
//     setCustomInput(e.target.value);
//   };
//   const handleSetLanguage = (event: any) => {
//     setSetLang(event.target.value);
//   };

//   const handleRunCode = async () => {
//     setLoading(true);

//     setShowOutputSection(true);

//     const options = {
//       method: "POST",
//       url: "https://online-code-compiler.p.rapidapi.com/v1/",
//       headers: {
//         "content-type": "application/json",
//         "X-RapidAPI-Key": "b8fbf23572msh5937faec3ef7c60p1d7c92jsnfb7c9fddb975",
//         "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
//       },
//       data: {
//         language: setLang,
//         version: "latest",
//         code: code,
//         input: customInput,
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       setLoading(false);
//       setCodeRes(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//     codeOutputRef.current?.scrollIntoView();
//   };

//   // Socket config
//   const sendMessage = () => {
//     window.scrollTo(0, document.body.scrollHeight);
//     (document.getElementById("input_message") as HTMLInputElement).value = "";

//     const newOutgoingChat = {
//       username,
//       message,
//       type: "outgoing",
//     };
//     setChats((chats) => [...chats, newOutgoingChat]);
//     if (message) socket.emit("send_message", { message, username, roomID });
//     setMessage("");
//   };

//   const copyRoomId = () => {
//     navigator.clipboard.writeText(roomID);
//     alert(
//       "room id copied. Now you can share this id to your friends so that they can also join your room."
//     );
//   };

//   const joinRoom = () => {
//     if (roomID !== "") {
//       socket.emit("join_room", roomID);
//       setOpenModel(!openModel);
//     }
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data: any) => {
//       const newIngoingChat = {
//         username: data.username,
//         message: data.message,
//         type: "ingoing",
//       };
//       setChats((chats) => [...chats, newIngoingChat]);
//     });
//   }, []);

//   return (
//     <div className="relative page h-full w-full">
//       <div className="relative overflow-hidden h-full w-full">
//         <div className="hidden lg:inline-block w-full h-full">
//           <ResizablePanelGroup direction="horizontal">
//             <ResizablePanel defaultSize={80}>
//               <iframe
//                 height="100%"
//                 src={`https://onecompiler.com/embed/python?codeChangeEvent=true&${
//                   theme.theme === "dark" ? "theme=dark" : ""
//                 }`}
//                 width="100%"
//               ></iframe>
//             </ResizablePanel>
//             <ResizableHandle withHandle />
//             <ResizablePanel className="px-5" defaultSize={20}>
//               <div className="h-full">
//                 <div className="flex justify-between items-center py-4 px-6">
//                   <button
//                     onClick={copyRoomId}
//                     className="flex items-center gap-1 py-1 rounded-full"
//                   >
//                     <span className="text-2xl">
//                       <BiCopy />
//                     </span>
//                     <span className="text-xl">Room</span>
//                   </button>

//                   <button className="flex" onClick={handleRunCode}>
//                     <span className="text-2xl text-green-400">
//                       <BsFillPlayFill />
//                     </span>
//                     <span className="text-xl">Run Code</span>
//                   </button>

//                   <select
//                     onChange={handleSetLanguage}
//                     className="border px-2 py-2"
//                   >
//                     {Languages.map((lg) => (
//                       <option key={lg} className="bg-transparent">
//                         {lg}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <Chat />
//               </div>
//             </ResizablePanel>
//           </ResizablePanelGroup>
//         </div>
//         <div className="inline-block lg:hidden w-full h-full">
//           <ResizablePanelGroup direction="vertical">
//             <ResizablePanel defaultSize={80}>
//               <iframe
//                 height="100%"
//                 src={`https://onecompiler.com/embed/python?codeChangeEvent=true&${
//                   theme.theme === "dark" ? "theme=dark" : ""
//                 }`}
//                 width="100%"
//               ></iframe>
//             </ResizablePanel>
//             <ResizableHandle withHandle />
//             <ResizablePanel className="px-5" defaultSize={20}>
//               <Chat />
//             </ResizablePanel>
//           </ResizablePanelGroup>
//         </div>

//         <Sheet>
//           <div className="fixed bottom-0 right-10 rounded-full shadow-inner">
//             <SheetTrigger>
//               <Image src="/th.jpeg" width={40} height={40} alt="chat" />
//             </SheetTrigger>
//           </div>
//           <SheetContent>
//             <SheetHeader>
//               <SheetTitle>Want to chat?</SheetTitle>
//               <SheetDescription>
//                 To do this action first copy room id and share it with your
//                 friends or members.
//               </SheetDescription>

//               <div className="w-full pt-5">
//                 <div className="w-full">
//                   <div className="w-full">
//                     <div className="flex w-full items-center space-x-2">
//                       <Input
//                         onChange={(event) => {
//                           setMessage(event.target.value);
//                         }}
//                         className="w-full"
//                         type="text"
//                         placeholder="Message..."
//                         id="input_message"
//                       />

//                       <Button
//                         id="scrolltobottom"
//                         onClick={sendMessage}
//                         type="submit"
//                       >
//                         Send
//                         <span className="text-xl pl-1">
//                           <BsSendFill />
//                         </span>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-full mt-2 h-full">
//                   <div className="rounded-lg border px-3 py-2 space-y-4 w-full h-60 overflow-auto">
//                     {chats.map((chat) => (
//                       <div
//                         className={`w-full flex ${
//                           chat.type === "ingoing"
//                             ? "justify-start"
//                             : "justify-end"
//                         }`}
//                         key={chat.username + chat.message}
//                       >
//                         <div
//                           className={`max-w-[80%] px-2 py-1 text-base rounded-md ${
//                             chat.type === "ingoing"
//                               ? "bg-gray-100 dark:bg-gray-800"
//                               : "bg-blue-100 dark:bg-blue-800"
//                           }`}
//                         >
//                           <strong>{chat.username}: </strong>
//                           {chat.message}
//                         </div>
//                       </div>
//                     ))}
//                     <div ref={messageEndRef} />
//                   </div>
//                 </div>
//               </div>
//             </SheetHeader>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// };

// export default CodeChatPlayGround;

"use client";
// import "./page.css";
import * as io from "socket.io-client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
// import EditorNavbar from "@/components/EditorNavbar";
import { FiLoader } from "react-icons/fi";
import { RiMenu4Line } from "react-icons/ri";
// import { useRouter, useSearchParams } from "next/navigation";
// import Avatar from "react-avatar";
import { FaArrowRightLong } from "react-icons/fa6";

import Link from "next/link";
import { FaUser } from "react-icons/fa";

import {
  BsFillChatHeartFill,
  BsFillPlayFill,
  BsSendFill,
} from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SiGoogleclassroom } from "react-icons/si";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import JoinRoomPC from "@/components/codechat/JoinRoomPC";
import JoinRoomMobile from "@/components/codechat/JoinRoomMobile";
import { useTheme } from "next-themes";
import { MessageCircle } from "lucide-react";

// import CodeOutput from "@/components/CodeOutput";
const socket = io.connect("https://codeme-backend-socket-io.onrender.com");
const Page = () => {
  const [roomID, setRoomID] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [showOutputSection, setShowOutputSection] = useState(false);
  const [code, setCode] = useState(""); // code which user writes
  const [setLang, setSetLang] = useState(""); // language user select
  const [codeRes, setCodeRes] = useState({} as any); // code response after running code
  const [chats, setChats] = useState([] as any[]); // all chats incoming and outgoing
  const [openModel, setOpenModel] = useState(true);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chatBox, setChatBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  const messageEndRef = useRef<HTMLInputElement>(null);
  const codeOutputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const [roomid, setRoomid] = useState("");
  const [idCopied, setIdCopied] = useState(false);
  useEffect(() => {
    setRoomid(localStorage.getItem("roomid") || "");
  }, []);

  useEffect(() => {
    if (idCopied) {
      setTimeout(() => {
        setIdCopied(false);
      }, 2000);
    }
  }, [idCopied]);

  const Languages = [
    "none",
    "c",
    "cpp",
    "cpp14",
    "cpp17",
    "go",
    "java",
    "javascript",
    "python2",
    "python3",
    "sql",
  ];

  // scrolling to bottom in chatbox
  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [chats]);

  const handleChatBox = () => {
    setChatBox(!chatBox);
  };

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleCode = (e: any) => {
    setCode(e.target.value);
  };
  const handleCustomInput = (e: any) => {
    setCustomInput(e.target.value);
  };
  const handleSetLanguage = (event: any) => {
    setSetLang(event.target.value);
  };

  const handleRunCode = async () => {
    setLoading(true);

    setShowOutputSection(true);

    const options = {
      method: "POST",
      url: "https://online-code-compiler.p.rapidapi.com/v1/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "b8fbf23572msh5937faec3ef7c60p1d7c92jsnfb7c9fddb975",
        "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
      },
      data: {
        language: setLang,
        version: "latest",
        code: code,
        input: customInput,
      },
    };

    try {
      const response = await axios.request(options);
      setLoading(false);
      setCodeRes(response.data);
    } catch (error) {
      console.error(error);
    }
    codeOutputRef.current?.scrollIntoView();
  };

  // Socket config
  const sendMessage = (e: any) => {
    e.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
    (document.getElementById("input_message") as HTMLInputElement).value = "";

    const newOutgoingChat = {
      username,
      message,
      type: "outgoing",
    };
    setChats((chats) => [...chats, newOutgoingChat]);
    if (message) socket.emit("send_message", { message, username, roomID });
    setMessage("");
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomID);
    alert(
      "room id copied. Now you can share this id to your friends so that they can also join your room."
    );
  };

  const joinRoom = () => {
    if (roomID !== "") {
      socket.emit("join_room", roomID);
      setOpenModel(!openModel);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      const newIngoingChat = {
        username: data.username,
        message: data.message,
        type: "ingoing",
      };
      setChats((chats) => [...chats, newIngoingChat]);
    });
  }, []);

  return (
    <div className={`relative page h-full w-full   `}>
      {openModel ? (
        <div className="relative">
          <div className="">
            {/* join room pc modal */}
            <JoinRoomPC
              setRoomID={setRoomID}
              setUsername={setUsername}
              joinRoom={joinRoom}
            />
            {/* join modal mobile view */}
            <JoinRoomMobile
              setRoomID={setRoomID}
              setUsername={setUsername}
              joinRoom={joinRoom}
            />
          </div>
        </div>
      ) : (
        <div className="relative  overflow-hidden ">
          {/* navbar */}
          <div className={`relative w-full px-6 md:px-10 py-4 `}>
            <div className="flex justify-between items-center w-full gap-2">
              <div className="inline lg:hidden">
                <Sheet>
                  <SheetTrigger className="text-2xl">
                    <RiMenu4Line />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>
                        <Image
                          src="/logo.svg"
                          width={140}
                          height={140}
                          alt="logo"
                        />
                      </SheetTitle>
                      <div className="w-full py-20">
                        <div className="w-full flex flex-col justify-start gap-y-6">
                          <button
                            onClick={copyRoomId}
                            className={`flex items-center gap-1  py-1 rounded-full`}
                          >
                            <span className="text-2xl ">
                              <BiCopy />
                            </span>
                            <span className="text-xl">Room</span>
                          </button>

                          <button className="  flex" onClick={handleRunCode}>
                            <span className="text-2xl text-green-400">
                              <BsFillPlayFill />
                            </span>
                            <span className="text-xl">Run Code</span>
                          </button>

                          <select
                            onChange={handleSetLanguage}
                            className="border px-2 py-2"
                          >
                            {Languages.map((lg) => (
                              <option key={lg} className="bg-transparent">
                                {lg}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          <div className="h-screen w-full">
            <iframe
              height="100%"
              src={`https://onecompiler.com/embed/python?codeChangeEvent=true&${
                theme.theme === "dark" ? "theme=dark" : ""
              }`}
              width="100%"
            ></iframe>
          </div>
          {/* Message section */}
          <section className="">
            <Sheet>
              <div className="fixed bottom-4 right-10 rounded-full shadow-inner">
                <SheetTrigger className="bg-primary text-primary-foreground rounded-full p-3 border border-muted">
                  <MessageCircle className="w-7 h-7" />
                </SheetTrigger>
              </div>
              <SheetContent>
                <SheetHeader>
                  {/* -------------------------------- */}
                  <h6 className="text-md font-medium">
                    Chat Box{" "}
                    <span
                      className="text-muted-foreground text-xs hover:underline cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText(roomid);
                        setIdCopied(true);
                      }}
                    >
                      #{roomid}
                    </span>
                  </h6>
                  <p className="text-xs text-secondary-foreground">
                    Chat with your roommates{" "}
                    {idCopied ? (
                      <span className="text-primary text-md">ID Copied </span>
                    ) : null}
                  </p>
                  {/* -------------------------------- */}

                  <div className="w-full pt-5  ">
                    <div className=" w-full">
                      <div className=" w-full  ">
                        <div className="">
                          <form
                            className="flex w-full  items-center gap-2"
                            onSubmit={sendMessage}
                          >
                            <Input
                              onChange={(event) => {
                                setMessage(event.target.value);
                              }}
                              className="w-full"
                              placeholder="Message..."
                              id="input_message"
                            />

                            <Button id="scrolltobottom" type="submit">
                              Send
                            </Button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-3 ">
                      <div className="   h-screen w-full  rounded-lg  bg-muted overflow-y-scroll overflow-hidden  hideScrollbar">
                        {/* map recent chats */}
                        <div className=" md:px-4 gap-y-4 h-full">
                          {chats.length > 0
                            ? chats.map((cht) => (
                                <div
                                  key={cht.username}
                                  className={`md:px-4 py-1  ${
                                    cht.type == "outgoing"
                                      ? "flex justify-end"
                                      : "flex justify-start"
                                  }`}
                                >
                                  <div>
                                    <small className="italic pl-2 text-xs">
                                      {cht.username}
                                    </small>
                                    <h6
                                      style={{ overflowWrap: "break-word" }}
                                      className={`  rounded-b-xl rounded-tl-xl px-3 py-1 text-sm ${
                                        cht.type == "outgoing"
                                          ? "bg-primary/15 "
                                          : "bg-primary text-primary-foreground"
                                      }`}
                                    >
                                      {cht.message}
                                    </h6>
                                    <div ref={messageEndRef} />
                                  </div>
                                </div>
                              ))
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </section>
        </div>
      )}
    </div>
  );
};

export default Page;
