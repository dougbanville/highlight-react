import { useContext } from "react";
import AudioContext from "../components/AudioContext";

const AudioUi = () => {
  const { audioId, isPlaying, playAudio, pauseAudio, resumeAudio, time } = useContext(AudioContext);
  //const playerTime = localStorage.getItem("currentTime");
  return (
    <div className="audio-ui">
      my Audio! {audioId} {time}
      <style jsx>
        {`
          .audio-ui {
            position: fixed;
            height: 60px;
            background: indigo;
            color: white;
            top: 0px;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};
export default AudioUi;
