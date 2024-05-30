import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MdPrivacyTip } from "react-icons/md";
import { Plus } from "lucide-react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const createRoomID = () => {
    const unique_id = nanoid();
    // localStorage.setItem("roomid", unique_id);
    alert(
      "Your room ID: " +
        unique_id +
        "\n Enter this room id in the input field to create a room."
    );
    // router.push(`/dashboard/code-chat/playground/${unique_id}`);
  };
  return (
    <div>
      <div className=" w-full h-[80vh]">
        <div className="flex justify-center items-center w-full h-full">
          <div className="xl:w-[30%] lg:w-[40%] md:w-[60%]">
            <div className="">
              <div>
                <h1 className="text-2xl font-bold ">
                  Welcome to your workplace! <br />
                  Create your room.
                </h1>
              </div>
              <form className="pt-10 flex  justify-start flex-col items-start">
                <div className="w-full">
                  <label className="font-medium text-xs  py-1 uppercase">
                    Enter Room ID
                  </label>
                  <div className="relative  w-full">
                    <Input
                      className=" w-full"
                      placeholder="Room ID"
                      onChange={(event) => {
                        setRoomID(event.target.value);
                      }}
                    />
                    <span className="absolute top-[35%]  text-primary text-md right-4">
                      <MdPrivacyTip />
                    </span>
                  </div>
                </div>
                <div className="mt-6 w-full">
                  <label className="font-medium text-xs  py-1 uppercase">
                    Username
                  </label>
                  <div className="relative h-fit ">
                    <Input
                      className=" w-full"
                      placeholder="Username"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                    <span className="absolute top-[38%]  text-primary text-sm right-4">
                      <FaUser />
                    </span>
                  </div>
                </div>

                <div className="flex justify-center gap-4 flex-col">
                  <Button
                    className="mt-6   text-xs flex items-center gap-2 w-fit"
                    onClick={(e: any) => joinRoom()}
                  >
                    Join Room <FaArrowRightLong />
                  </Button>
                  <div className="flex items-center text-xs">
                    Dont't have room id
                    <span
                      onClick={createRoomID}
                      className="text-blue-500 font-medium  flex items-center "
                    >
                      , want to create one?
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomPC;
