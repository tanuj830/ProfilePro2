import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";

interface JoinRoomPCProps {
  setRoomID: Function;
  setUsername: Function;
  joinRoom: Function;
}

const JoinRoomPC: React.FC<JoinRoomPCProps> = ({
  setRoomID,
  setUsername,
  joinRoom,
}) => {
  return (
    <div>
      <div className="hidden md:inline-block w-full h-screen">
        <div className="flex w-full h-full">
          <div className="w-[50%] bg-slate-50 p-10">
            <div className="flex justify-between items-center">
              <Link href="/">
                <img src="/favicon.png" className="w-16" alt="" />
              </Link>
              <div>Help</div>
            </div>
            <div className="md:px-0 lg:px-28 xl:px-40">
              <div>
                <h1 className="text-3xl font-bold mt-20">
                  Welcome to your workplace. Create room for{" "}
                  <span className="text-indigo-600">Code Chat</span>
                </h1>
              </div>
              <div className="pt-10">
                <div>
                  <label className="font-semibold text-sm pl-1 py-1">
                    Enter Room ID
                  </label>
                  <div className="relative h-fit ">
                    <input
                      className="bg-indigo-500/10 rounded-xl outline-indigo-500 px-4 py-3 w-full"
                      placeholder="Room ID"
                      onChange={(event) => {
                        setRoomID(event.target.value);
                      }}
                    />
                    <span className="absolute top-3  text-slate-500 text-2xl right-4">
                      <SiGoogleclassroom />
                    </span>
                  </div>
                </div>
                <div className="pt-6">
                  <label className="font-semibold text-sm pl-1 py-1">
                    User Name
                  </label>
                  <div className="relative h-fit ">
                    <input
                      className="bg-indigo-500/10 rounded-xl outline-indigo-500 px-4 py-3 w-full"
                      placeholder="Username"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                    <span className="absolute top-3  text-slate-500 text-2xl right-4">
                      <FaUser />
                    </span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className="mt-6 font-semibold text-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full px-5 py-2 flex items-center gap-2"
                    onClick={(e: any) => joinRoom()}
                  >
                    Join Room <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[50%] h-screen">
            <img className="object-cover w-full" src="/laptop.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomPC;
