import React from 'react'
import './header.css'
import { headerData } from './initialData'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => (
  <div className="gpt3__header section__padding gradient__bg" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">{headerData.header}</h1>
      <p>{headerData.content}</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="enter your e-mail adress" />
        <button type="button">{headerData.button}</button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>{headerData.peopleVisited.amount} people requested access a visit in last {headerData.peopleVisited.time}</p>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
)


export default Header
