import ChatScreen from "./components/chatScreen/ChatScreen";
import "./App.css";
import Userinput from "./components/chatScreen/Userinput";
import React, { useState } from "react";
import HeaderInput from "./components/header/HeaderInput";
import {
  initialData,
  initialHeader,
  playDeleteSound,
  takeScreenshot,
} from "./utils";

const App = () => {
  const [data, setData] = useState(initialData);
  const [header, setHeader] = useState(initialHeader);
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);

  const addNewMessage = (newMessage) => {
    newMessage = {
      ...newMessage,
      sender: JSON.parse(newMessage.sender),
      id: Math.random().toString(),
    };
    setData((prev) => [...prev, newMessage]);
  };

  const deleteHandler = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    playDeleteSound();
    setData(filteredData);
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
        <ChatScreen data={data} header={header} onDelete={deleteHandler} />
      </div>
    </div>
  );
};

export default App;
