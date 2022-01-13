import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Music from "./components/Music";
import Profile from "./components/Profile";
// import meida
import Mainimage from "../src/media/1.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 1,
      Profile: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information." },
        { id: 2, title: "CSS", desc: "CSS is for design." },
        { id: 3, title: "JavaScaript", desc: "JavaScript is for interactive." },
      ],
    };
  }
  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        _title = data.title;
        _desc = data.desc;
        break;
      }
      i = i + 1;
    }
    return (
      <div className="App">
        <a className="title1" href="/">
          밍기뉴 팬방 홈페이지
        </a>
        <div id="main-image">
          <img src={Mainimage}></img>
        </div>
        <ul>
          <li>이름: 박서정</li>
          <li>생년월일: 1999년 10월 13일</li>
        </ul>
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
        <p className="font2">
          만든이: 밍기뉴예쁘다<br></br>블로그:{" "}
          <a href="https://blog.naver.com/lgr421">
            https://blog.naver.com/lgr421
          </a>
          <br></br>
          이메일: lgr421@gmail.com
        </p>

        <TOC
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
