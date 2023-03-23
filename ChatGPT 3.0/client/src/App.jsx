import React, { useState } from "react";
import ChatBody from "./components/ChatBody";

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
      <div>
        <ChatBody />
      </div>

      {/* Input box */}
      <div>Input box</div>
    </div>
  );
}

export default App;
