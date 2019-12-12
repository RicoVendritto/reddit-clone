import React from 'react';

const Comments = (props) => {
  console.log(props);
  return (
    props.comments.map((comment, index) => //
      <div key={index}>
        <p>{comment}</p>
      </div>
    )
  )
}

export default Comments;