import React, { useState } from "react";
import "./Userinput.css";
function Userinput(props) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  const [input, setInput] = useState({
    id: Math.random().toString(),
    text: "",
    time: "",
    sender: true,
    status: "seen",
  });

  const messageChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, text: e.target.value }));
  };

  const timeChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, time: e.target.value }));
  };

  const senderChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, sender: e.target.value }));
  };

  const statusChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, status: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(input);
    setToggle(false);
    setInput({
      id: Math.random().toString(),
      text: "",
      time: "",
      sender: true,
      status: "seen",
    });
  };

  return (
    <div className="user-input">
      {toggle ? (
        <form className="user-input__form" action="" onSubmit={submitHandler}>
          <div className="user-input__controls">
            <div className="user-input__control">
              <label htmlFor="">Message text </label>
              <textarea
                type="text"
                name="text"
                id=""
                rows="5"
                columns="10"
                value={input.text}
                onChange={messageChangeHandler}
              />
            </div>
            <div className="user-input__control">
              <label htmlFor="">Message time </label>
              <input
                type="time"
                name="time"
                id=""
                value={input.time}
                onChange={timeChangeHandler}
              />
            </div>
            <div className="user-input__control">
              <label htmlFor="">Message Read Status </label>
              <select
                name="status"
                id=""
                value={input.status}
                onChange={statusChangeHandler}
              >
                <option value="seen">Seen</option>
                <option value="delivered">Delivered</option>
                <option value="sent">Sent</option>
              </select>
            </div>
            <div className="user-input__control">
              <label htmlFor="">Sender </label>
              <select
                name="sender"
                id=""
                value={input.sender}
                onChange={senderChangeHandler}
              >
                <option value={true}>Sender</option>
                <option value={false}>Receiver</option>
              </select>
            </div>
          </div>
          <div className="user-input__buttons">
            <button type="submit" className="user-input__button">
              Add Message
            </button>
            <button className="user-input__button" onClick={handleClick}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          className="user-input__button"
          style={{ margin: "auto" }}
          onClick={handleClick}
        >
          Add New Message
        </button>
      )}
    </div>
  );
}

export default Userinput;
