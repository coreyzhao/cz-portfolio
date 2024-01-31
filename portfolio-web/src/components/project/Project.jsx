import React from 'react';
import './project.css';

const Article = ({ imgUrl, date, text, description, div1, imgUrl2, imgUrl3, imgUrl4}) => (
  <div className="port__project-container_article">
    <div className="port__project-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="port__project-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
        <h1>{description}</h1>
      </div>
      <div>
        {div1}
      </div>
    </div>
  </div>
);

export default Article;
