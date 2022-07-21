import React from "react";
import "./ChatScreen.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Message from "../message/Message";

const ChatScreen = (props) => {
  const messageDeleteHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <div className="chat-body">
      <div className="chat-screen">
        <Header
          name={props.header.displayName}
          status={props.header.displayStatus}
          time={props.header.displayTime}
          pic={props.header.displayPic}
        />
        <div className="chat-screen__body">
          {props.data.map((item) => (
            <Message
              key={item.id}
              id={item.id}
              sender={item.sender}
              text={item.text}
              time={item.time}
              status={item.status}
              onDelete={messageDeleteHandler}
            />
          ))}
        </div>
        <Footer />
      </div>
      {/* <div className="chat-screen__shutter"></div> */}
    </div>
  );
};

export default ChatScreen;
