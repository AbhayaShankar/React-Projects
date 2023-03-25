import React, { useState } from "react";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";
import { useMutation } from "react-query";
import { fetchResponse } from "./api";

function App() {
  const [chat, setChat] = useState([]);

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: data.message.replace(/^\n\n/, "") },
      ]),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
  };

  return (
    <div className="bg-[#242627] text-white h-screen py-6 relative sm:px-28 overflow-hidden flex flex-col justify-between align-middle">
      {/* Header */}
      <div className="text-[32px] mb-5 font-medium tracking-wider uppercase text-center">
        ChatGPT 3.0
      </div>

      <div className="gradient-01 absolute z-0"></div>
      <div className="gradient-02 absolute z-0"></div>
      {/* <div className="gradient-03 absolute z-0"></div> */}

      {/* Body */}
      <div className="h-[90%] overflow-auto w-full max-w-[900px] min-w-[200px] py-8 px-5 self-center">
        <ChatBody chat={chat} />
      </div>

      {/* Input box */}
      <div className="flex items-center justify-center w-full max-w-[900px] min-w-[200px] self-center">
        <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
      </div>
    </div>
  );
}

export default App;
