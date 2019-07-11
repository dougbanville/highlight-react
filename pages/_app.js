import React from "react";
import App, { Container } from "next/app";
import AudioContext from "../components/AudioContext";
import AudioPlayer from "../components/AudioPlayer";
import AudioUi from "../components/AudioUi";
import Router from "next/router";

class MyApp extends App {
  state = {
    audioRefId: null,
    isPlaying: "false",
    audioPlayer: null
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

    audioPlayer.ontimeupdate = a => {
      console.log(a.srcElement.currentTime);
      //console.log(`playing ${a}`);
      localStorage.setItem("currentTime", a.srcElement.currentTime);
      this.setState({
        isPlaying: true,
        time: a.srcElement.currentTime
      });
    };
    audioPlayer.onpause = () => {
      console.log(`pausing`);
      this.setState({
        isPlaying: false
      });
    };
  };

  playAudio = audio => {
    const audioPlayer = document.getElementById(`audioPlayer`);

    let audioProps = audio.target.value.split(",");
    let audioId = audioProps[0];
    let audioUrl = audioProps[1];

    audioPlayer.setAttribute("src", audioUrl);

    this.setState({
      audioId: audioId,
      isPlaying: true
    });
    Router.push("/?biong");

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
            time: this.state.time
          }}
        >
          <Component {...pageProps} />
        </AudioContext.Provider>
        <div className="staticDiv" id="static">
          <AudioPlayer />
          <AudioUi audioId={this.state.audioId} />
        </div>
      </Container>
    );
  }
}

export default MyApp;
