import React, { Component } from "react";
import { useState } from "react";

export default class PlayButton extends Component {
  render() {
    const mediaHtml = `<audio id="audioPlayer" controls />`;
    const openPLayer = `<audio id="audioPlayer" class="op-player op-player__media" controls playsinline>
    <source >
</audio>`;
    return <div dangerouslySetInnerHTML={{ __html: openPLayer }} />;
  }
}
