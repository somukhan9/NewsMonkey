import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <>
        <LoadingBar color="#f11946" height={3} progress={this.state.progress} />
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="genral"
                  category="general"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  category="sports"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  path="/science"
                  category="science"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  category="technology"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
          </Routes>
        </div>
      </>
    );
  }
}
