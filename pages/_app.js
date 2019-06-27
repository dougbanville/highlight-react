import React from "react";
import App, { Container } from "next/app";
import AudioContext from "../components/AudioContext";
import AudioPlayer from "../components/AudioPlayer";

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

    audioPlayer.ontimeupdate = () => {
      console.log(`playing`);
      this.setState({
        isPlaying: true
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
            resumeAudio: this.resumeAudio
          }}
        >
          <Component {...pageProps} />
        </AudioContext.Provider>
        <div className="staticDiv" id="static">
          <AudioPlayer />
        </div>
      </Container>
    );
  }
}

export default MyApp;
