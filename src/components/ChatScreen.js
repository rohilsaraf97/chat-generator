import React from "react";
import "./ChatScreen.css";
import Footer from "./Footer";
import Header from "./Header";
import Message from "./Message";

function ChatScreen(props) {
  return (
    <div className="chat-body">
      <div className="chat-screen">
        <Header
          name={props.header.displayName}
          status={props.header.displayStatus}
        />
        <div className="chat-screen__body">
          {props.data.map((item) => (
            <Message
              key={item.id}
              sender={item.sender}
              text={item.text}
              time={item.time}
              status={item.status}
            />
          ))}
        </div>
        <Footer />
      </div>
      {/* <div className="chat-screen__shutter"></div> */}
    </div>
  );
}

export default ChatScreen;
