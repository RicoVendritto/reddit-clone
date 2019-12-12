import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.postSubmit}>
      <input
        type="text"
        name="title"
        placeholder="TITLE"
        value={props.title}
        onChange={props.onContentChange}
      />
      <textarea
        type="textarea"
        rows="4"
        name="content"
        placeholder="CONTENT"
        value={props.content}
        onChange={props.onContentChange}
      />
      <input type="submit" value="POST" />
    </form>
  );
};

export default Form;
