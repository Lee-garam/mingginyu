import React from "react";
import Mainimage from "../media/1.jpg";
import Profile from "./Profile";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div>
      <div id="main-image">
        <img src={Mainimage} width={"300px"}></img>
      </div>
      <ul>
        <li>이름: 박서정</li>
        <li>생년월일: 1999년 10월 13일</li>
      </ul>
      <h1 className="title2 font1">
        <Link to={`/Profile`}> 밍기뉴 계정</Link>
      </h1>
      <hr></hr>
      <Profile></Profile>
      <h1 className="title2 font1">
        <Link to={`/Music`}> 밍기뉴 노래 </Link>{" "}
      </h1>
      <hr></hr>
      <h1 className="title2 font1">
        <Link to={`/Information`}> 밍기뉴 TMI </Link>{" "}
      </h1>
      <hr></hr>
      <p className="font2">
        만든이: 밍기뉴예쁘다<br></br>블로그:{" "}
        <a href="https://blog.naver.com/lgr421">
          https://blog.naver.com/lgr421
        </a>
        <br></br>
        이메일: lgr421@gmail.com
      </p>
    </div>
  );
}

export default Main;
