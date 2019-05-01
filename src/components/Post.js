import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title, author, onClick, isViewed }) => (
  <div className={`post ${isViewed ? 'post--viewed' : ''}`} data-viewed="Viewed">
    <div className="post__media" onClick={onClick}>
      <Link to={`/${id}`}>
        <img src="" alt="" data-error="The image doesn't load" />
      </Link>
    </div>
    <div className="post__text">
      <h2 onClick={onClick}>
        <Link to={`/${id}`}>
          {title}
        </Link>
      </h2>
      <div className="author">
        <span className="author__logo">
          <img src={author.image.url} alt={author.displayName} />
        </span>
        <span className="author__name">
          {author.displayName}
        </span>
      </div>
    </div>
  </div>
);

export default Post;
