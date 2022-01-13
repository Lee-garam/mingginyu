import soundcloudImage from "../media/soundcloud.jpg";
import instagramImage from "../media/instagram.png";
import youtubeImage from "../media/YouTube.png";

import "./Profile.scss";

function Profile() {
  return (
    <ol className="account">
      <li>
        <div>soundcloud 본계정</div>
        <a href="https://soundcloud.com/mingginyu">
          <img src={soundcloudImage}></img>
        </a>
      </li>
      <li>
        <div>soundcloud 부계정</div>
        <a href="https://soundcloud.com/minggijeog">
          <img src={soundcloudImage}></img>
        </a>
      </li>
      <li>
        <div>instagram 본계정</div>
        <a href="https://www.instagram.com/_mingginyu_/">
          <img src={instagramImage}></img>
        </a>
      </li>
      <li>
        <div>instagram 부계정</div>
        <a href="https://www.instagram.com/m1ngmind/">
          <img src={instagramImage}></img>
        </a>
      </li>
      <li>
        <div>youtube 부계정</div>
        <a href="https://www.youtube.com/channel/UChRI2yTk9wvlD2J7tyH2uyQ">
          <img src={youtubeImage}></img>
        </a>
      </li>
    </ol>
  );
}

export default Profile;
