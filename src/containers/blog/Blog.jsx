import React from 'react'
import { Article } from '../../components/'
import { mainArticleData, articleData } from './initialData'
import './blog.css'


const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening,<br />We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container__groupA">
        <Article type="primary" {...mainArticleData} />
      </div>
      <div className="gpt3__blog-container__groupB">
        {
          articleData.map(article =>
            <Article key={article.id} {...article} type="secondary" />
          )
        }
      </div>
    </div>
  </div>
)


export default Blog
