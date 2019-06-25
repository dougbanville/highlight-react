import React, { Component } from "react";
import { useState } from "react";

export default class PlayButton extends Component {
  render() {
    const mediaHtml = `<audio id="audioPlayer" controls />`;
    return <div dangerouslySetInnerHTML={{ __html: mediaHtml }} />;
  }
}
