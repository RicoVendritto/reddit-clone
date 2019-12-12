import React, { Component } from "react";
import "./App.css";

//Custom Components
import Post from "./components/Post";
import Form from "./components/Form";

//Custom images
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// {/* <i class="fas fa-thumbs-up"></i> */}
// const thumbsUp = <FontAwesomeIcon icon={faCoffee} />

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      title: "",
      author: "Richard M Braamburg",
      voteCount: 0,
      posts: [
        {
          title: "This is a Title",
          content: "Write anything you like",
          author: "Mr. Nice Guy",
          voteCount: 0
        }
      ]
    };
  }

  sortList = e => {
    let currentPosts = this.state.posts;
    currentPosts.sort((a, b) => b.voteCount - a.voteCount);
    this.setState({
      posts: currentPosts
    });
  };

  onContentChange = e => {
    const content = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: content
    });
  };

  postSubmit = e => {
    e.preventDefault();
    const currentPosts = this.state.posts;
    const newPost = {
      author: this.state.author,
      title: this.state.title,
      content: this.state.content,
      voteCount: this.state.voteCount
    };
    currentPosts.push(newPost);
    this.setState({
      posts: currentPosts,
      content: "",
      title: ""
    });
    this.sortList();
  };

  vote = (e, postTitle, operator) => {
    e.preventDefault();
    switch (operator) {
      case "plus":
        postTitle.voteCount++;
        break;
      case "minus":
        postTitle.voteCount--;
        break;
      default:
        console.log("Something went terribly wrong!");
    }
    this.setState({
      post: postTitle.voterCount
    });
    this.sortList();
  };

  render() {
    return (
      <div className="App">
        <Form
          onContentChange={this.onContentChange}
          postSubmit={this.postSubmit}
          title={this.state.title}
          content={this.state.content}
        />
        <div className="post-wrapper">
          {this.state.posts.map((post, index) => (
            <div key={index} className="indvPost">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <h4>{post.author}</h4>
              <p className={post.voteCount <= 0 ? "red" : "green"}>
                {post.voteCount}
              </p>
              <div className="votes">
                <i
                  onClick={e => this.vote(e, post, "plus")}
                  className="fas fa-thumbs-up"
                ></i>
                <i
                  onClick={e => this.vote(e, post, "minus")}
                  className="fas fa-thumbs-down"
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
