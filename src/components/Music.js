import music1 from "../media/1.m4a";
import music2 from "../media/2.mp3";
import music3 from "../media/3.mp3";
import music4 from "../media/4.mp3";
import music5 from "../media/5.mp3";
import music6 from "../media/audio/결혼 (Live).mp3";
import music7 from "../media/audio/공드리 (Live).mp3";
import music8 from "../media/audio/기다린 만큼 더 (Live).mp3";
import music9 from "../media/audio/나랑 아니면 (Live).mp3";
import music10 from "../media/audio/스토커 (Live).mp3";
import music11 from "../media/audio/와르르 (Live).mp3";
import music12 from "../media/audio/잊어야 한다는 마음으로 (Live).mp3";

function Music() {
  const musics = [
    {
      key: 1,
      title: "나 안 사랑해도 되니까",
      music: music1,
    },
    {
      key: 2,
      title: "snowman(cover)",
      music: music2,
    },
    {
      key: 3,
      title: "liabillity",
      music: music3,
    },
    {
      key: 4,
      title: "마음들",
      music: music4,
    },
    {
      key: 5,
      title: "블루베이비보틀",
      music: music5,
    },
    {
      key: 6,
      title: "결혼 (Live)",
      music: music6,
    },
    {
      key: 7,
      title: "공드리 (Live)",
      music: music7,
    },
    {
      key: 8,
      title: "기다린 만큼 더 (Live)",
      music: music8,
    },
    {
      key: 9,
      title: "나랑 아니면 (Live)",
      music: music9,
    },
    {
      key: 10,
      title: "스토커 (Live)",
      music: music10,
    },
    {
      key: 11,
      title: "와르르 (Live)",
      music: music11,
    },
    {
      key: 12,
      title: "잊어야 한다는 마음으로 (Live)",
      music: music12,
    },
  ];

  return (
    <ul>
      {musics.map((x) => {
        return (
          <li>
            <div>{x.title}</div>
            <audio src={x.music} controls play loot></audio>
          </li>
        );
      })}
    </ul>
  );
}

export default Music;
