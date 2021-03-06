import React from "react";
import App, { Container } from "next/app";
import AudioContext from "../components/AudioContext";
import AudioPlayer from "../components/AudioPlayer";
import AudioUi from "../components/AudioUi";
import Router from "next/router";
import InitAudioContext from "../components/InitAudioContext";

class MyApp extends App {
  state = {
    showPlayer: false,
    audioRefId: null,
    audioPlayer: null,
    ready: false,
    isPlaying: false
  };
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount = () => {
    //!Setup an event listener for your audio player
    const audioPlayer = document.getElementById(`audioPlayer`);
    const container = document.getElementById("container");

    audioPlayer.oncanplay = a => {
      container.setAttribute("class", "nudge");
      this.setState({
        ready: true
      });
    };

    audioPlayer.ontimeupdate = a => {
      localStorage.setItem("currentTime", a.srcElement.currentTime);
      let duration = 0;
      if (!isNaN(duration)) {
        duration = Number(a.srcElement.duration);
      }
      this.setState({
        //isPlaying: true,
        time: Number(a.srcElement.currentTime),
        duration: Number(duration)
      });
    };
    audioPlayer.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };
    audioPlayer.onpause = () => {
      this.setState({
        isPlaying: false
      });
    };
    audioPlayer.onerror = e => {
      console.log(e);
    };
  };

  playAudio = audio => {
    const audioPlayer = document.getElementById(`audioPlayer`);

    let audioProps = audio.target.value.split(",");
    let audioId = audioProps[0];
    let audioUrl = audioProps[1];
    if (audioUrl) {
      audioPlayer.setAttribute("src", audioUrl);
    }

    this.setState({
      audioId: audioId,
      isPlaying: true
    });
    audioPlayer.play();
  };
  pauseAudio() {
    const audioPlayer = document.getElementById(`audioPlayer`);

    audioPlayer.pause();
  }
  resumeAudio() {
    const audioPlayer = document.getElementById(`audioPlayer`);

    audioPlayer.play();
  }
  setIntialAudio = audio => {
    console.log(audio.target.value);
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <AudioContext.Provider
          value={{
            audioId: this.state.audioId,
            playAudio: this.playAudio,
            audioPlayer: this.state.audioPlayer,
            pauseAudio: this.pauseAudio,
            isPlaying: this.state.isPlaying,
            resumeAudio: this.resumeAudio,
            time: this.state.time,
            duration: this.state.duration,
            ready: this.state.ready
          }}
        >
          <Component {...pageProps} />
          <InitAudioContext.Provider value={{ audioUrl: "ttttt", audioId: 0 }}>
            <AudioPlayer />

            <AudioUi />
          </InitAudioContext.Provider>
        </AudioContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
