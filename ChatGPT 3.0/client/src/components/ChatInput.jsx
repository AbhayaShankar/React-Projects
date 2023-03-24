import React from "react";
import send from "../../media/send.png";

const ChatInput = () => {
  return (
    <div className="relative">
      <textarea
        className="w-[57vw] max-h-[200px] h-[80px] outline-none bg-white bg-opacity-10 px-4 py-2 pr-5 tracking-wider text-[13px] rounded-lg overflow-auto "
        rows={2}
      />
      {/* <input
        className="w-[55vw] h-[40px] outline-none text-black px-4 py-2 tracking-wider  text-[13px]  bg-transparent border-2  border-[#bdbdbd] rounded-lg"
        type="text"
      /> */}

      <img
        className="h-5 w-5  absolute right-3 top-[32px] cursor-pointer hover:cursor-pointer ease-in duration-100 hover:scale-110"
        src={send}
        alt=""
      />
    </div>
  );
};

export default ChatInput;
