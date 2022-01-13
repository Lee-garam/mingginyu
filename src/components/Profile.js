import React, { Component } from "react";
import soundcloudImage from "../media/soundcloud.jpg";
import instagramImage from "../media/instagram.png";
import youtubeImage from "../media/YouTube.png";

import "./Profile.scss";

class Profile extends Component {
  render() {
    return (
      <ol className="account">
        <div>
          <div>본계정</div>
          <a href="https://soundcloud.com/mingginyu">
            <img src={soundcloudImage}></img>
          </a>
        </div>
        <div>
          <div>부계정</div>
          <a href="https://soundcloud.com/minggijeog">
            <img src={soundcloudImage}></img>
          </a>
        </div>
        <div>
          <div>본계정</div>
          <a href="https://www.instagram.com/_mingginyu_/">
            <img src={instagramImage}></img>
          </a>
        </div>
        <div>
          <div>부계정</div>
          <a href="https://www.instagram.com/m1ngmind/">
            <img src={instagramImage}></img>
          </a>
        </div>
        <div>
          <div>부계정</div>
          <a href="https://www.youtube.com/channel/UChRI2yTk9wvlD2J7tyH2uyQ">
            <img src={youtubeImage}></img>
          </a>
        </div>
      </ol>
    );
  }
}

export default Profile;
