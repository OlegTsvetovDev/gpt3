import React from 'react'
import { ctaData } from './initialData'
import './cta.css'


const Cta = () => (
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


export default Cta
