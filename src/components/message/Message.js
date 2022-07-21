import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { DeleteTwoTone } from "@mui/icons-material";
import "./Message.css";

const Message = (props) => {
  return (
    <div
      className="message"
      style={
        props.sender
          ? { backgroundColor: "#DCF7C5", alignSelf: "flex-end" }
          : { backgroundColor: "#ffffff", alignSelf: "flex-start" }
      }
      onClick={() => props.onDelete(props.id)}
    >
      <div className="message__delete">
        <div className="message__delete-icon">
          <DeleteTwoTone fontSize="larger" />
        </div>
      </div>
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
};

export default Message;
