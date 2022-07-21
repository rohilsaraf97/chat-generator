import html2canvas from "html2canvas";
import clickSound from "./assets/audio/click.mp3";
import trashSound from "./assets/audio/trash.mp3";
import defaultProfilepic from "./assets/images/defaultProfile.jpeg";

export const initialUserInput = {
  id: Math.random().toString(),
  text: "",
  time: "",
  sender: false,
  status: "seen",
};

export const initialHeader = {
  displayName: "James Webb",
  displayTime: "9:41",
  displayStatus: "Tap here to view contact info",
  displayPic: defaultProfilepic,
};

export const initialData = [
  {
    id: "m1",
    sender: true,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptatibus cumque autem expedita qui at odio fuga sequi dolorem eos!",
    time: "1:56",
    status: "delivered",
  },
  {
    id: "m2",
    sender: true,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque",
    time: "2:56",
    status: "seen",
  },
  {
    id: "m3",
    sender: false,
    text: "Lorem ipsum, dolor sit amet",
    time: "3:56",
    status: "",
  },
  {
    id: "m4",
    sender: true,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptatibus cumque autem",
    time: "5:12",
    status: "delivered",
  },
  {
    id: "m5",
    sender: false,
    text: "Lorem ipsum, dolor sit",
    time: "6:09",
    status: "",
  },
  {
    id: "m6",
    sender: false,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptatibus cumque autem expedita qui at odio fuga sequi dolorem eos!",
    time: "7:30",
    status: "",
  },
];

export const playClickSound = () => {
  let click_sound = new Audio(clickSound);
  click_sound.play();
};

export const playDeleteSound = () => {
  let click_sound = new Audio(trashSound);
  click_sound.play();
};

export const takeScreenshot = () => {
  window.scrollTo(0, 0);
  let chatScreen = document.getElementsByClassName("chat-screen")[0];
  playClickSound();
  html2canvas(chatScreen).then((canvas) => {
    let imageURL = canvas.toDataURL("image/jpeg", 0.9);
    let a = document.createElement("a");
    a.href = imageURL;
    a.download = "temply-ss";
    a.click();
  });
};

export const loadFile = function (event) {
  console.log(event.target.files[0]);
  return URL.createObjectURL(event.target.files[0]) ?? "";
};
