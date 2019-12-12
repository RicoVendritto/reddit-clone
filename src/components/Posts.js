import React from "react";

const Posts = (props) => {
  return (
    <div className="post-wrapper">
      {props.posts.map((post, index) => (
        <div key={index} className="indvPost">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <h4>{post.author}</h4>
          <p className={post.voteCount <= 0 ? "red" : "green"}>
            {post.voteCount}
          </p>
          <div className="votes">
            <i
              onClick={e => props.vote(e, post, "plus")}
              className="fas fa-thumbs-up"
            ></i>
            <i
              onClick={e => props.vote(e, post, "minus")}
              className="fas fa-thumbs-down"
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
