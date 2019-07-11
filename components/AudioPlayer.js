import React, { Component } from "react";
import { useState } from "react";

export default class PlayButton extends Component {
  constructor(props) {
    super(props);
    //this.listRef = React.createRef();
  }
  render() {
    const audioPlayer = `<audio id="audioPlayer" playsinline>
    <source >
</audio>`;
    return <div dangerouslySetInnerHTML={{ __html: audioPlayer }} />;
  }

  componentDidMount() {
    //this.openPlayer
    console.log(`hi ${this.props.showPlayer}`);
  }
}
