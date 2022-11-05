import React from 'react'
import './cta.css'


const ctaData = {
  cta: 'Request Early Access to Get Started',
  header: 'Register today & start exploring the endless possiblities.',
  button: 'Get started'
}

const CTA = ({ props }) => (
  <div className="section__padding">
    <div className="gpt3__cta" id="cta">
      <div className="gpt3__cta-content">
        <p>{ctaData.cta}</p>
        <h3>{ctaData.header}</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">{ctaData.button}</button>
      </div>
    </div>
  </div>
)


export default CTA
