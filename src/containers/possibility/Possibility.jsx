import React from 'react'
import { possibility } from './initialData'
import possibilityImg from '../../assets/possibility.png'
import './possibility.css'


const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImg} alt="gpt3-possibilities"/>
    </div>
    <div className="gpt3__possibility-content">
      <a href={possibility.firstLink.href}>{possibility.firstLink.name}</a>
      <h1 className="gradient__text">{possibility.header}</h1>
      <p>{possibility.content}</p>
      <a href={possibility.secondLink.href}>{possibility.secondLink.name}</a>
    </div>
  </div>
)


export default Possibility
