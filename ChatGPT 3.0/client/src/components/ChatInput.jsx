import React from "react";
import send from "../../media/send.png";

const ChatInput = () => {
  return (
    <div className="relative">
      <input
        className="w-[55vw] h-[40px] outline-none text-black px-4 py-2 tracking-wider  text-[13px]  bg-transparent border-2  border-[#bdbdbd] rounded-lg"
        type="text"
      />

      <img className="h-4 w-5 absolute right-5 top-[10px]" src={send} alt="" />
    </div>
  );
};

export default ChatInput;
