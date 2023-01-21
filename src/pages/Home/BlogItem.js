import React from 'react';

function BlogItem({ imgUrl, title, description, author }) {
  return (
    <div className="box">
      <div className="image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="desc">
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
        <div className="flex">
          <span>{author}</span>
          <div>
            <i className="fa-regular fa-clock"></i>
            <small>min read</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;