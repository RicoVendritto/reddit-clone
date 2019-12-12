import React from "react";

import Comments from "./Comments";

const Posts = props => {
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
          <form className="commenttext" onSubmit={(e) => props.commentSubmit(e, post)}> 
            <textarea
              type="textarea"
              rows="2"
              name="comments"
              placeholder="COMMENT"
              value={props.comment}
              onChange={props.onContentChange}
            />
            <input type="submit" value="COMMENT" />
          </form>
          {post.comments.length > 0 && <Comments comments={post.comments} />}
        </div>
      ))}
    </div>
  );
};

export default Posts;
