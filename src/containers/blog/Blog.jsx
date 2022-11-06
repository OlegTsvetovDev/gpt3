import React from 'react'
import { Article } from '../../components/'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'


const mainArticleData = {
  id: 0,
  date: 'Sep 26, 2021',
  header: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
  img: blog01
}

const articleData = [
  {
    id: 1,
    date: 'Sep 26, 2021',
    header: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    img: blog02
  },
  {
    id: 2,
    date: 'Sep 26, 2021',
    header: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    img: blog03
  },
  {
    id: 3,
    date: 'Sep 26, 2021',
    header: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    img: blog04
  },
  {
    id: 4,
    date: 'Sep 26, 2021',
    header: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    img: blog05
  },
]


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
