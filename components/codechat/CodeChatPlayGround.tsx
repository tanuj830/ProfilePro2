"use client";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Chat from "./Chat";
const CodeChatPlayGround = () => {
  window.onmessage = function (e) {
    if (e.data && e.data.language) {
      console.log(e.data);
      // handle the e.data which contains the code object
    }
  };
  return (
    <div className="h-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={80}>
          <iframe
            height="100%"
            src="https://onecompiler.com/embed/python?codeChangeEvent=true&theme=dark"
            width="100%"
          ></iframe>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="px-2 h-full relative" defaultSize={20}>
          <Chat />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default CodeChatPlayGround;
