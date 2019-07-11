import { useContext } from "react";
import AudioContext from "../components/AudioContext";
import ToggleAudio from "../components/ToggleAudio";
import ProgressBar from "../components/ProgressBar";

const AudioUi = () => {
  const { ready, audioId, isPlaying, playAudio, pauseAudio, resumeAudio, time, duration } = useContext(
    AudioContext
  );
  const percentage = (time, duration) => {
    //return time;
    return Math.floor((time / duration) * 100) + "%";
  };
  //const playerTime = localStorage.getItem("currentTime");
  if (ready) {
    return (
      <div className="audio-ui">
        <ToggleAudio />
        <ProgressBar value={time} max={duration} />
        my Audio! {ready} {audioId} {time} {duration} {percentage(time, duration)}
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
            progress {
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  } else {
    return <div />;
  }
};
export default AudioUi;
