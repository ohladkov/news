import React from 'react';
import Post from './Post';

const PostsList = ({ posts, onPostClick }) => (
  <div className="post-list">
    {posts.map((post) => (
      <Post
        key={post.id}
        {...post}
        onClick={() => {
          onPostClick(post.id);
        }}
      />
    ))}
  </div>
);

export default PostsList;
