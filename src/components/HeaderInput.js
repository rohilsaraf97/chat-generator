import React, { useState } from "react";
import "./HeaderInput.css";

function HeaderInput(props) {
  const [header, setHeader] = useState({
    displayName: "",
    displayStatus: "Tap here to view your contact info",
  });

  const nameChangeHandler = (e) => {
    setHeader((prev) => ({ ...prev, displayName: e.target.value }));
  };

  const statusChangeHandler = (e) => {
    setHeader((prev) => ({ ...prev, displayStatus: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(header);
    props.onCancel();
  };

  return (
    <div className="user-input">
      <form action="" onSubmit={submitHandler}>
        <div className="user-input_controls">
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
            <label htmlFor="">Chat Status</label>
            <select
              name="status"
              id=""
              value={header.displayStatus}
              onChange={statusChangeHandler}
            >
              <option value="online">online</option>
              <option value="lastseen">Last seen at 20:14</option>
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
