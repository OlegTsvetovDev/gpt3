import React from 'react'
import './features.css'


const data = {
  header: 'The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.',
  button: 'Request Early Access to Get Started'
}

const Features = ({ props }) => (
  <div className="gpt3__features section__padding">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">{data.header}</h1>
      <a href="">{data.button}</a>
    </div>
  </div>
)


export default Features
