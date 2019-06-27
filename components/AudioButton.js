import { useContext } from "react";
import AudioContext from "../components/AudioContext";

const AudioButton = ({ id, audioUrl }) => {
  const { audioId, isPlaying, playAudio, pauseAudio, resumeAudio } = useContext(AudioContext);
  const datObj = `${id},${audioUrl}`;

  if (id == audioId && isPlaying) {
    return (
      <button className="button large secondary" onClick={pauseAudio}>
        Pause
      </button>
    );
  }
  if (id == audioId) {
    return (
      <button className="button large secondary" onClick={resumeAudio}>
        Resume
      </button>
    );
  }
  return (
    <button className="button large success" onClick={playAudio} value={datObj} dataaudio={audioUrl}>
      Play
    </button>
  );
};

export default AudioButton;
