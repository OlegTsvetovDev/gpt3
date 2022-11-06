import React from 'react'
import Feature from '../../components/feature/Feature'
import { whatGPT3Data, topFeature, otherFeatures } from './initialData'
import './whatGPT3.css'


const WhatGPT3 = () => (
  <div>
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature {...topFeature} layout="row" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">{whatGPT3Data.header}</h1>
        <a href={whatGPT3Data.link.href}>{whatGPT3Data.link.name}</a>
      </div>
      <div className="gpt3__whatgpt3-container">
        {
          otherFeatures.map(feature =>
            <Feature key={feature.id} {...feature} layout="column" />
          )
        }
      </div>
    </div>
  </div>
)


export default WhatGPT3
