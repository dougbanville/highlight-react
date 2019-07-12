import React, { Component } from "react";
import { useState } from "react";
import AudioContext from "../components/AudioContext";

class AudioPlayer extends Component {
  static async getInitialProps({ req }) {
    let url = `https://radio.rte.ie/radio1highlights/wp-json/wp/v2/posts/`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0].rte_mp3_audio);
    return data;
  }

  render(props) {
    console.log(this.props);
    const audioPlayer = `<audio id="audioPlayer" playsinline>
    <source >
</audio>`;
    return <div dangerouslySetInnerHTML={{ __html: audioPlayer }} />;
  }
}

export default AudioPlayer;
