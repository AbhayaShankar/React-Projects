import React from "react";

const ChatBody = ({ chat }) => {
  const aiStyle =
    "bg-[#8AEA92] backdrop-blur-lg mr-auto dropshadow-md bg-opacity-20";

  return (
    <div>
      <div className="flex flex-col gap-5">
        {chat.map((message, i) => {
          return (
            <div
              key={i}
              className={`border-[#999999] break-words self-end border-2 max-w-[80% ] rounded-[20px] text-[13px] px-4 py-1 tracking-wider leading-[22px] ${
                message.sender === "ai" && aiStyle
              }`}
            >
              <pre className="whitespace-pre-wrap">
                <span>{message.message}</span>
              </pre>
            </div>
          );
        })}

        {/* <div
          className={`border-[#999999] break-words self-end border-2 max-w-[80%] rounded-[20px] px-4 py-1  text-[13px] mr-auto ${aiStyle} tracking-wider leading-[22px] `}
        >
          <pre className="whitespace-pre-wrap">
            <span className="  ">
              {" "}
              Hello! It's great to have you here. As an AI language model, I am
              programmed to assist and provide information to the best of my
              ability. Whether you have a question, need help with a problem, or
              just want to chat, I am here to listen and respond. So feel free
              to ask me anything and let's get started!{" "}
            </span>
          </pre>
        </div> */}
      </div>
    </div>
  );
};

export default ChatBody;
