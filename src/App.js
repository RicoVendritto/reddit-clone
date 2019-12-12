import React, { Component } from "react";
import "./App.css";

//Custom Components
import Post from "./components/Post";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      posts: []
    };
  }

  onChange = e => {
    const content = e.target.value;
    console.log(content);
    this.setState({
      content
    });
  };

  postSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.postSubmit}>
          <input
            type="textarea"
            name="content"
            placeholder="POST IT"
            value={this.state.content}
            onChange={this.onChange}
          />
          <input type="submit" value="POST" />
        </form>
      </div>
    );
  }
}

export default App;
