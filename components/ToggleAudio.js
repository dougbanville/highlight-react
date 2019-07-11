import { useContext } from "react";
import AudioContext from "../components/AudioContext";

const ToggleAudio = () => {
  const { ready, audioId, isPlaying, playAudio, pauseAudio, resumeAudio, time, duration } = useContext(
    AudioContext
  );
  if (isPlaying) {
    return (
      <button className="button" onClick={pauseAudio}>
        <i className="fas fa-pause" /> Toggle
      </button>
    );
  } else {
    return (
      <button className="button" onClick={resumeAudio}>
        <i className="fas fa-play" /> Toggle
      </button>
    );
  }
};

export default ToggleAudio;
