import React from 'react';

const Comments = (props) => {
  return (
    props.comments.map((comment, index) =>
      <div key={index}>
        <p>{comment}</p>
      </div>
    )
  )
}


export default Comments;