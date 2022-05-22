import React, { Component } from "react";
import logo from "./spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex justify-content-center">
          <img src={logo} alt="Loading..." />
        </div>
      </div>
    );
  }
}
