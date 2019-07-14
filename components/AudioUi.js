import { useContext, useEffect } from "react";
import AudioContext from "../components/AudioContext";
import ToggleAudio from "../components/ToggleAudio";
import ProgressBar from "../components/ProgressBar";
import InitAudioContext from "../components/InitAudioContext";

const AudioUi = () => {
  const { ready, audioId, isPlaying, playAudio, pauseAudio, resumeAudio, time, duration } = useContext(AudioContext);
  const { audioUrl } = useContext(InitAudioContext);
  const percentage = (time, duration) => {
    //return time;
    return Math.floor((time / duration) * 100) + "%";
  };

  useEffect(() => {
    let audio = document.getElementById("audioPlayer");
    let firstAudio = document.getElementsByClassName("audioButton");
    console.log(firstAudio[0].value);
    let a = firstAudio[0].value;
    let det = a.split(",");
    console.log(det[0]), det[1];
    audioPlayer.setAttribute("src", det[1]);
  }, []);

  //const playerTime = localStorage.getItem("currentTime");
  if (ready) {
    return (
      <div className="audio-container">
        <div className="audio-ui">
          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              <div className="small-12">
                <ToggleAudio />
                <ProgressBar value={time} max={duration} />
              </div>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .audio-ui {
              position: fixed;
              height: 60px;
              background: rgba(0, 0, 0, 0.9);
              color: white;
              top: 0px;
              width: 100%;
              max-height: 60px;
            }
            progress {
              width: 100%;
            }
            .nudge {
              height: 60px;
              display: block;
            }
          `}
        </style>
      </div>
    );
  } else {
    return (
      <div className="audio-container">
        <div className="audio-ui">Play All</div>
      </div>
    );
  }
};
export default AudioUi;
