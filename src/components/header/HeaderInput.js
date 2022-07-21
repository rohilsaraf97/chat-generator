import React, { useState } from "react";
import { loadFile } from "../../utils";
import "./HeaderInput.css";

function HeaderInput(props) {
  const [header, setHeader] = useState({
    displayName: "",
    displayTime: "9:41",
    displayStatus: "online",
    displayPic: "",
  });

  const timeChangeHandler = (e) => {
    setHeader((prev) => ({ ...prev, displayTime: e.target.value }));
  };

  const nameChangeHandler = (e) => {
    setHeader((prev) => ({ ...prev, displayName: e.target.value }));
  };

  const statusChangeHandler = (e) => {
    setHeader((prev) => ({ ...prev, displayStatus: e.target.value }));
  };

  const picChangeHandler = (e) => {
    setHeader((prev) => ({ ...prev, displayPic: loadFile(e) }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(header);
    props.onSubmit(header);
    props.onCancel();
  };

  return (
    <div className="user-input">
      <form action="" onSubmit={submitHandler}>
        <div className="user-input_controls">
          <div className="user-input_control">
            <label htmlFor="">Display Time: </label>
            <input
              type="time"
              name="text"
              id=""
              value={header.displayTime}
              onChange={timeChangeHandler}
            />
          </div>
          <div className="user-input_control">
            <label htmlFor="">Display Profile Pic: </label>
            <input
              type="file"
              name="myImage"
              accept="image/*"
              className="custom-file-input"
              onChange={picChangeHandler}
            />
          </div>
          <div className="user-input_control">
            <label htmlFor="">Chat Name: </label>
            <input
              type="text"
              name="text"
              id=""
              value={header.displayName}
              onChange={nameChangeHandler}
              required
            />
          </div>
          <div className="user-input__control">
            <label htmlFor="">Chat Status: </label>
            <select
              name="status"
              id=""
              value={header.displayStatus}
              onChange={statusChangeHandler}
            >
              <option value="online">Online</option>
              <option value="Tap here to view contact info">
                Tap here to view contact info
              </option>
              <option value="">None</option>
            </select>
          </div>
        </div>
        <div className="user-input__buttons">
          <button type="submit" className="user-input__button">
            Modify info
          </button>
          <button className="user-input__button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default HeaderInput;
