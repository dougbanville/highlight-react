import React from "react";
import App, { Container } from "next/app";
import AudioContext from "../components/AudioContext";

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

    this.setState({
      audioPlayer: audioPlayer,
      isPlaying: "nope"
    });

    audioPlayer.onplay = () => {
      this.setState({
        isPlaying: "true"
      });
    };
    audioPlayer.onpause = () => {
      this.setState({
        isPlaying: "false"
      });
    };
  };

  playAudio = audio => {
    //this.
    let audioProps = audio.target.value.split(",");
    let audioId = audioProps[0];
    let audioUrl = audioProps[1];
    console.log(`${audioId} - ${audioUrl}`);

    this.state.audioPlayer.setAttribute("src", audioUrl);
    //audioPlayer.play();

    this.setState({
      audioId: audioId
    });

    this.state.audioPlayer.play();
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <AudioContext.Provider
          value={{ audioId: this.state.audioId, playAudio: this.playAudio, audioPlayer: this.state.audioPlayer }}
        >
          <Component {...pageProps} />
        </AudioContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
