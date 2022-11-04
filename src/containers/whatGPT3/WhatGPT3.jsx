import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT3.css'


const data = [
  {
    id: 0,
    title: 'What is GPT-3',
    text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
  },
  {
    id: 1,
    title: 'Chatbots',
    text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'
  },
  {
    id: 2,
    title: 'Knowledgebase',
    text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
  },
  {
    id: 3,
    title: 'Education',
    text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
  },
]

const topFeature = data[0]
const otherFeatures = data.slice(1)

const WhatGPT3 = () => (
  <div>
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature {...topFeature} layout="row" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <a href="#">Explore The Library</a>
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
