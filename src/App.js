import React, { Component } from "react";
import "./App.css";
import Music from "./components/Music";
import Profile from "./components/Profile";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
// import meida
import Main from "./components/Main";
import Information from "./components/Information";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/music" element={<Music />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/information" element={<Information />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
