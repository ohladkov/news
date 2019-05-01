import React from 'react';

const Post = ({ url, urlToImage, title, description, onClick, viewed }) => (
  <div className={`post ${viewed ? 'post--viewed' : ''}`} onClick={onClick} data-viewed="Viewed">
    <a href={url} className="post__media" target="_blank" rel="noopener noreferrer">
      <img
        src={urlToImage}
        alt={description || 'Image description'}
        data-error="We're sorry, the image below is broken :("
      />
    </a>
    <div className="post__text">
      <h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p>{description || 'Post description'}</p>
    </div>
  </div>
);

export default Post;
