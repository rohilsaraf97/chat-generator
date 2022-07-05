import ChatScreen from "./components/ChatScreen";
import "./App.css";
import Userinput from "./components/Userinput";
import React, { useState } from "react";
import html2canvas, { saveAs } from "html2canvas";
import HeaderInput from "./components/HeaderInput";

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
    time: "3:56",
    status: "",
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
    time: "6:09",
    status: "",
  },
  {
    id: "m6",
    sender: false,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptatibus cumque autem expedita qui at odio fuga sequi dolorem eos!",
    time: "7:30",
    status: "",
  },
];

const initialHeader = {
  displayName: "Phineas Flynn",
  displayStatus: "Tap here to see contact info",
};

function App() {
  const [data, setData] = useState(initialData);
  const [header, setHeader] = useState(initialHeader);
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const addNewMessage = (newMessage) => {
    newMessage = { ...newMessage, sender: JSON.parse(newMessage.sender) };
    setData((prev) => [...prev, newMessage]);
  };

  const modifyHeader = (newHeader) => {
    setHeader(newHeader);
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleToggle1 = () => {
    setToggle1((prev) => !prev);
  };

  const takeScreenshot = () => {
    window.scrollTo(0, 0);
    let click_sound = new Audio(
      "http://www.soundjay.com/mechanical/camera-shutter-click-08.mp3"
    );
    let chatScreen = document.getElementsByClassName("chat-screen")[0];
    click_sound.play();
    html2canvas(chatScreen).then((canvas) => {
      let imageURL = canvas.toDataURL("image/jpeg", 0.9);
      let a = document.createElement("a");
      a.href = imageURL;
      a.download = "temply-ss";
      a.click();
    });
  };

  return (
    <div className="app">
      <h1>temply</h1>
      <div className="app__body">
        {toggle ? (
          <Userinput onSubmit={addNewMessage} onCancel={handleToggle} />
        ) : toggle1 ? (
          <HeaderInput onSubmit={modifyHeader} onCancel={handleToggle1} />
        ) : (
          <div className="user-input">
            <div className="user-input__buttons">
              <button
                type="submit"
                className="user-input__button"
                onClick={handleToggle1}
              >
                Change Header Info
              </button>
              <button
                type="submit"
                className="user-input__button"
                onClick={handleToggle}
              >
                Add New Message
              </button>
              <button className="user-input__button" onClick={takeScreenshot}>
                Take Screenshot
              </button>
            </div>
          </div>
        )}
        <ChatScreen data={data} header={header} />
      </div>
    </div>
  );
}

export default App;
