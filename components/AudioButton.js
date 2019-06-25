import { useContext } from "react";
import AudioContext from "../components/AudioContext";

const AudioButton = ({ id, audioUrl }) => {
  const { audioId, isPlaying, playAudio } = useContext(AudioContext);
  const datObj = `${id},${audioUrl}`;
  return (
    <button className="button large success" onClick={playAudio} value={datObj} dataaudio={audioUrl}>
      Play {id} {isPlaying} {audioId}
    </button>
  );
};

export default AudioButton;
