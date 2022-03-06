import React from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularConnectedNoInternet3BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet3Bar";
import Battery90SharpIcon from "@mui/icons-material/Battery90Sharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import "./Header.css";

function Header() {
  return (
    <div className="chat-screen__header">
      <div className="chat-screen__systemInfo">
        <div className="chat-screen__time">
          <p>9:41</p>
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
        <div className="chat-screen__nameAndStatus">
          <p className="chat-screen__name">Martha Craig</p>
          <p className="chat-screen__status">Tap here for more contact info</p>
        </div>
        <VideocamOutlinedIcon className="chat-screen__icon" fontSize="medium" />
        <PhoneRoundedIcon className="chat-screen__icon" fontSize="small" />
      </div>
    </div>
  );
}

export default Header;
