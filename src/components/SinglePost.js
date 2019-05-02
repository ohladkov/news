import React from 'react';

const SinglePost = ({ match }) => (
  <div className="singlepost" style={{ textAlign: 'center' }}>
    <h1>single post</h1>
    <p>{match.params.postId}</p>
  </div>
);

export default SinglePost;
