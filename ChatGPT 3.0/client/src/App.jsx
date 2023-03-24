import React, { useState } from "react";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";

function App() {
  return (
    <div className="bg-[#242627] text-white h-screen py-6 relative sm:px-28 overflow-hidden flex flex-col justify-between align-middle">
      {/* Header */}
      <div className="text-[32px] mb-5 font-medium tracking-wider uppercase text-center">
        ChatGPT 3.0
      </div>

      <div className="gradient-01 absolute z-0"></div>
      <div className="gradient-02 absolute z-0"></div>
      <div className="gradient-03 absolute z-0"></div>

      {/* Body */}
      <div className="h-[90%] overflow-auto w-full max-w-[900px] min-w-[200px] py-8 px-5 self-center">
        <ChatBody />
      </div>

      {/* Input box */}
      <div className="flex items-center justify-center w-full max-w-[900px] min-w-[200px] self-center">
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
