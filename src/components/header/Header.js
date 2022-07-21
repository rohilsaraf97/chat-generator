import React from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularConnectedNoInternet3BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet3Bar";
import Battery90SharpIcon from "@mui/icons-material/Battery90Sharp";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import profilePic from "../../assets/images/defaultProfile.jpeg";
import "./Header.css";

function Header(props) {
  console.log("props.pic", props);
  return (
    <div className="chat-screen__header">
      <div className="chat-screen__systemInfo">
        <div className="chat-screen__time">
          <p>{props.time}</p>
        </div>
        <SignalCellularConnectedNoInternet3BarIcon fontSize="small" />
        <WifiIcon fontSize="small" />
        <Battery90SharpIcon fontSize="small" />
      </div>
      <div className="chat-screen__profileInfo">
        <ArrowBackIosNewRoundedIcon
          className="chat-screen__icon"
          fontSize="medium"
        />
        <img
          src={props.pic === "" ? profilePic : props.pic}
          className="chat-screen__profilePic"
          alt="profile"
        />
        <div className="chat-screen__nameAndStatus">
          <p className="chat-screen__name">{props.name}</p>
          <p className="chat-screen__status">{props.status}</p>
        </div>
        <VideocamOutlinedIcon className="chat-screen__icon" fontSize="medium" />
        <PhoneRoundedIcon className="chat-screen__icon" fontSize="small" />
      </div>
    </div>
  );
}

export default Header;
