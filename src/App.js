import React, { Component } from "react";
import "./App.css";
import Music from "./components/Music";
import Profile from "./components/Profile";
// import meida
import Mainimage from "../src/media/1.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title1">
          밍기뉴 팬방<br></br> 홈페이지
        </h1>
        <div id="main-image">
          <img src={Mainimage} width={"300px"}></img>
        </div>
        <ul>
          <li>이름: 박서정</li>
          <li>생년월일: 1999년 10월 13일</li>
        </ul>
        <h1 className="title2 font1">밍기뉴 계정</h1>
        <hr></hr>
        <Profile></Profile>
        <h1 className="title2 font1">밍기뉴 노래</h1>
        <hr></hr>
        <Music></Music>
        <h1 className="title2 font1">밍기뉴가 좋아하는 음식</h1>
        <hr></hr>
        <ul>
          <li>마라탕</li>
          <li>빵</li>
          <li>케이크</li>
          <li>중국당면</li>
          <li>훠궈</li>
          <li>양꼬치</li>
          <li>돼지고기</li>
          <li>김치찌개</li>
          <li>딱딱한 복숭아</li>
          <li>단호박 아이스크림</li>
          <li>건망고</li>
          <li>스타벅스 캐모마일 릴렉사</li>
        </ul>
        <h1 className="title2 font1">밍기뉴의 기분이 좋아지려면</h1>
        <hr></hr>
        <ul>
          <li>노래 듣기</li>
          <li>영화 보기</li>
          <li>산책 하기</li>
          <li>그림 그리기</li>
        </ul>
        <h1 className="title2 font1">밍기뉴의 최애곡</h1>
        <hr></hr>
        <ul>
          <li>기리보이 - 빈집</li>
          <li>김윤아 - 샤이닝</li>
          <li>이소라 - 시시콜콜한 이야기</li>
        </ul>
        <h1 className="title2 font1">밍기뉴의 인생영화</h1>
        <hr></hr>
        <ul>
          <li>블랙미러</li>
          <li>빅피쉬</li>
        </ul>
        <h1 className="title2 font1">밍기뉴의 악기</h1>
        <hr></hr>
        <ul>
          <li>통기타 세고비아 SSM-15C-NST (현재 단종된 모델)</li>
          <li>클래식기타 모델 원음 Estudio C (40호)</li>
          <li>우쿨렐레 모델 엔야 EUC-25D</li>
        </ul>
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
}

export default App;
