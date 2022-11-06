import React from 'react'
import Feature from '../../components/feature/Feature'
import { headersData, featuresData } from './initialData'
import './features.css'


const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">{headersData.header}</h1>
      <a href="">{headersData.button}</a>
    </div>
    <div className="pgt3__features-content">
      {
        featuresData.map(feature =>
          <Feature key={feature.id} {...feature} layout="row" />
        )
      }
    </div>
  </div>
)


export default Features
