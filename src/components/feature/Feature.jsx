import React from 'react'
import './feature.css'


const Feature = ({ title, text, layout }) => {
  const orientation = (layout === 'column') ? ' column' : ' row'
  return (
    <div className={"gpt3__features-container__feature" + orientation}>
      <div className="gpt3__features-container__feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}


export default Feature
