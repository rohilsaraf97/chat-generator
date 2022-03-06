import React, { useState } from "react";
import "./Userinput.css";
function Userinput(props) {
  const [input, setInput] = useState({
    id: Math.random().toString(),
    text: "",
    time: "",
    sender: false,
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
    console.log(input);
    input.sender === "true"
      ? props.onSubmit(input)
      : props.onSubmit({ ...input, status: "" });
    props.onCancel();
    setInput({
      id: Math.random().toString(),
      text: "",
      time: "",
      sender: false,
      status: "seen",
    });
  };

  return (
    <div className="user-input">
      {input.sender === "true" ? (
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
                required
              />
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
            <div className="user-input__control">
              <label htmlFor="">Message time </label>
              <input
                type="time"
                name="time"
                id=""
                value={input.time}
                onChange={timeChangeHandler}
                required
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
          </div>
          <div className="user-input__buttons">
            <button type="submit" className="user-input__button">
              Add Message
            </button>
            <button className="user-input__button" onClick={props.onCancel}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
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
          </div>
          <div className="user-input__buttons">
            <button type="submit" className="user-input__button">
              Add Message
            </button>
            <button className="user-input__button" onClick={props.onCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Userinput;

// <button
//   className="user-input__button"
//   style={{ margin: "auto" }}
//   onClick={handleClick}
// >
//   Add New Message
// </button>
