"use client";
import { Button } from "@/components/ui/button";
import { File, PlusCircle } from "lucide-react";
import React from "react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { nanoid } from "nanoid";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const CodeChat = () => {
  const router = useRouter();
  const createRoomID = () => {
    const unique_id = nanoid();
    localStorage.setItem("roomid", unique_id);

    router.push(`/dashboard/code-chat/playground/${unique_id}`);
  };
  return (
    <div className="h-[80vh]   w-full">
      <div className="flex justify-center h-full w-full items-center ">
        {/* <h6>Your current route is {path}</h6> */}
        <div className="flex flex-col items-center text-center gap-5">
          <span className="w-fit bg-secondary p-5 rounded-full ">
            <PlusCircle className="w-10 h-10 " />
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
          {/* <Link href="/dashboard/code-chat/playground"> */}
          <Button className="">
            <AlertDialog>
              <AlertDialogTrigger className="text-primary">
                {" "}
                Create a new room
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader
                  <AlertDialogTitle>Create Room</AlertDialogTitle>
                  <AlertDialogDescription>
                    Create room and share room id with your friends or
                    collegoues and ask them to join your room.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={createRoomID}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CodeChat;
