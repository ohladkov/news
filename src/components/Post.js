import React from 'react';

export default function Post({ url, urlToImage, title, description }) {
  return (
    <div className="post">
      <a href={url} className="post__media">
        <img
          src={urlToImage}
          alt={description || 'Image description'}
          data-error="We're sorry, the image below is broken :("
        />
      </a>
      <div className="post__text">
        <h2>
          <a href={url}>{title}</a>
        </h2>
        <p>{description || 'Post description'}</p>
      </div>
    </div>
  );
}
