import { useContext, useEffect } from "react";
import AudioContext from "../components/AudioContext";
//https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player#Progress
const ProgressBar = () => {
  const { ready, audioId, isPlaying, playAudio, pauseAudio, resumeAudio, time, duration } = useContext(AudioContext);

  const percent = (time, duration) => {
    return Math.floor((time / duration) * 100);
  };

  useEffect(() => {
    if (!isNaN(duration)) {
      let progress = document.getElementById("progress");

      progress.addEventListener("click", function(e) {
        let pos = (e.pageX - this.offsetLeft) / this.offsetWidth;
        //alert(pos);
        //video.currentTime = pos * video.duration;
        let audio = document.getElementById("audioPlayer");
        audio.currentTime = pos * audio.duration;
        console.log(pos);
      });
    }
  });

  if (!isNaN(duration)) {
    let percentage = percent(time, duration);
    return (
      <div
        id="progress"
        className="progress"
        role="progressbar"
        tabindex="0"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-meter" />
        <style jsx>{`
          .progress-meter {
            width: ${percentage}%;
          }
        `}</style>
      </div>
    );
  } else {
    return <div />;
  }
};

export default ProgressBar;
