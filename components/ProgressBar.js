import { useContext } from "react";
import AudioContext from "../components/AudioContext";

const ProgressBar = () => {
  const { ready, audioId, isPlaying, playAudio, pauseAudio, resumeAudio, time, duration } = useContext(
    AudioContext
  );
  if (!isNaN(duration)) {
    return <progress value={time} max={duration} />;
  } else {
    return <progress />;
  }
};

export default ProgressBar;
