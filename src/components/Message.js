import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneIcon from "@mui/icons-material/Done";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import "./Message.css";

function Message(props) {
  return (
    <div
      className="message"
      style={
        props.sender
          ? { backgroundColor: "#DCF7C5", alignSelf: "flex-end" }
          : { backgroundColor: "#ffffff", alignSelf: "flex-start" }
      }
    >
      <div className="message__body">
        <span className="message__content">{props.text}</span>
      </div>
      <div className="message__metadata">
        <span className="message__time">{props.time}</span>
        <span className="message__readStatus">
          {props.status === "seen" ? (
            <DoneAllIcon fontSize="smaller" className="message__seenIcon" />
          ) : props.status === "delivered" ? (
            <DoneAllIcon fontSize="smaller" />
          ) : props.status === "sent" ? (
            <DoneOutlinedIcon fontSize="smaller" />
          ) : null}
        </span>
      </div>
    </div>
  );
}

export default Message;
