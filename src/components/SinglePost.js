import React from 'react';

const SinglePost = ({match}) => (
  <div className="singlepost">
    single post
    <p>{match.params.postId}</p>
  </div>
);

export default SinglePost;
