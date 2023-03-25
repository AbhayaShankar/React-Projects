import React, { useState } from "react";
import send from "../../media/send.png";

const ChatInput = ({ sendMessage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };

  return (
    <div className="relative">
      <textarea
        className="w-[57vw] max-h-[200px] h-[80px] outline-none bg-white bg-opacity-10 px-4 py-2 pr-5 tracking-wider text-[13px] rounded-lg overflow-auto "
        onKeyDown={(e) => {
          e.keyCode === 13 && e.shiftKey === false && handleSubmit();
        }}
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        rows={2}
      />
      {/* <input
        className="w-[55vw] h-[40px] outline-none text-black px-4 py-2 tracking-wider  text-[13px]  bg-transparent border-2  border-[#bdbdbd] rounded-lg"
        type="text"
      /> */}

      <img
        className="h-5 w-5  absolute right-3 top-[32px] cursor-pointer hover:cursor-pointer ease-in duration-100 hover:scale-110"
        src={send}
        onClick={handleSubmit}
        alt=""
      />
    </div>
  );
};

export default ChatInput;
