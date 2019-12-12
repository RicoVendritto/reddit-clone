import React, { Component } from "react";
import "./App.css";

import Post from "./components/Post";

class App extends Component {
  constructor(props) {
    super(props);
    this.sate = {};
  }

  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
