import { Button } from "@/components/ui/button";
import { File, PlusCircle } from "lucide-react";
import React from "react";
import Link from "next/link";
const CodeChat = () => {
  return (
    <div className="h-[80vh] lg:h-full  w-full">
      <div className="flex justify-center h-full w-full items-center ">
        {/* <h6>Your current route is {path}</h6> */}
        <div className="flex flex-col items-center text-center gap-5">
          <span className="w-fit bg-secondary p-5 rounded-full ">
            <PlusCircle className="w-10 h-10 text-primary" />
          </span>
          <div className="md:w-[60%]">
            <h5 className="text-foreground font-medium my-4">
              You need to create a room for using this functionality
            </h5>
            <p className="text-muted-foreground text-wrap leading-7 text-sm">
              Create room and share your room id with your friends or collegues
              so that they can also join your room and you can collaborate and
              build some good stuff.
            </p>
          </div>
          <Link href="/dashboard/resume-builder/playground">
            <Button className="text-white">Create a new room</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodeChat;
