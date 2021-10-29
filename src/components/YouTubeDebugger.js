import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  handleBitrateClick = () => {
    this.setState(
      {
        settings: {
          ...this.state.settings,
          bitrate: 12,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleResClick = () => {
    this.setState(
      {
        settings: {
          ...this.state.settings,
          video: {
            resolution: "720p",
          },
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.handleBitrateClick} className="bitrate">
          Bitrate: {this.state.settings.bitrate}
        </button>
        <button onClick={this.handleResClick} className="resolution">
          Resolution: {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}
