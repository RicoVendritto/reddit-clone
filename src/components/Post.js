import React, { Component } from "react";

//Custom Components
import Posts from "./Posts";
import Form from "./Form";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      title: "",
      author: "Richard M Braamburg",
      voteCount: 0,
      comments: [],
      posts: [
        {
          title: "This is a Title",
          content: "Write anything you like",
          author: "Mr. Nice Guy",
          voteCount: 0,
          comments: ["This post sucks!", "This is inspirational!"]
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
      <div>
        <Form
          onContentChange={this.onContentChange}
          postSubmit={this.postSubmit}
          title={this.state.title}
          content={this.state.content}
        />
        <Posts posts={this.state.posts} vote={this.vote} />
      </div>
    );
  }
}

export default Post;
