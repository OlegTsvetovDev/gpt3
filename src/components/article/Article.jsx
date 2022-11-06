import React from 'react'
import './article.css'


const Article = ({ date, header, img }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-img">
      <img src={img} alt="header" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <p>{date}</p>
      <h3>{header}</h3>
      <a href="/">Read full Article</a>
    </div>
  </div>
)


export default Article
