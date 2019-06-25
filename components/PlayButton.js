import { useState } from "react";

const PlayButton = ({ id, audioUrl, playing }) => {
  const playAudio = () => {
    audioPlayer.setAttribute("src", audioUrl);
    audioPlayer.play();
  };
  if (id === playing) {
    return <button className="button">Pause</button>;
  }
  return <button className="button">Play Component {playing}</button>;
};

export default PlayButton;
