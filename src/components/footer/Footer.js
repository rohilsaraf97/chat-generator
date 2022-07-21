import React from "react";
import "./Footer.css";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import AddIcon from "@mui/icons-material/Add";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const Footer = () => {
  return (
    <div className="footer">
      <AddIcon className="footer__icon" fontSize="small" />
      <div className="footer__text">
        <InsertDriveFileOutlinedIcon
          className="footer__icon"
          fontSize="small"
        />
      </div>
      <CameraAltOutlinedIcon className="footer__icon" fontSize="small" />
      <MicNoneRoundedIcon className="footer__icon" fontSize="small" />
    </div>
  );
};

export default Footer;
