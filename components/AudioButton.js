import { useContext } from "react";
import AudioContext from "../components/AudioContext";

const AudioButton = ({ id, audioUrl }) => {
  const { audioId, isPlaying, playAudio, pauseAudio, resumeAudio } = useContext(AudioContext);
  const datObj = `${id},${audioUrl}`;

  if (id == audioId && isPlaying) {
    return (
      <button className="button large secondary audioButton" onClick={pauseAudio}>
        <i className="fas fa-pause" /> Pause {audioId}
      </button>
    );
  }
  if (id == audioId) {
    return (
      <button className="button large secondary audioButton" onClick={resumeAudio}>
        <i className="fas fa-play" /> Resume
      </button>
    );
  }
  return (
    <button
      className="button large success audioButton"
      onClick={playAudio}
      value={datObj}
      dataaudio={audioUrl}
    >
      <i className="fas fa-play" /> Play
    </button>
  );
};

export default AudioButton;
