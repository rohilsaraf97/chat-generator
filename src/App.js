import ChatScreen from "./components/ChatScreen";
import "./App.css";
import Userinput from "./components/Userinput";
import React, { useState } from "react";

const initialData = [
  {
    id: "m1",
    sender: true,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptatibus cumque autem expedita qui at odio fuga sequi dolorem eos!",
    time: "1:56",
    status: "delivered",
  },
  {
    id: "m2",
    sender: true,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque",
    time: "2:56",
    status: "seen",
  },
  {
    id: "m3",
    sender: false,
    text: "Lorem ipsum, dolor sit amet",
    time: "3:34",
    status: "sent",
  },
  {
    id: "m4",
    sender: true,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptatibus cumque autem",
    time: "5:12",
    status: "delivered",
  },
  {
    id: "m5",
    sender: false,
    text: "Lorem ipsum, dolor sit",
    time: "9:12",
    status: "seen",
  },
  {
    id: "m6",
    sender: false,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptatibus cumque autem expedita qui at odio fuga sequi dolorem eos!",
    time: "10:56",
    status: "seen",
  },
];

function App() {
  const [data, setData] = useState(initialData);
  const addNewMessage = (newMessage) => {
    newMessage = { ...newMessage, sender: JSON.parse(newMessage.sender) };
    setData((prev) => [...prev, newMessage]);
  };

  return (
    <div className="app">
      <h1>temply</h1>
      <div className="app__body">
        <Userinput onSubmit={addNewMessage} />
        <ChatScreen data={data} />
      </div>
    </div>
  );
}

export default App;
