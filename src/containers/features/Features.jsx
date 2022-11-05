import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'


const headersData = {
  header: 'The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.',
  button: 'Request Early Access to Get Started'
}

const featuresData = [
  {
    id: 0,
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    id: 1,
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },
  {
    id: 2,
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    id: 3,
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  },
]

const Features = ({ props }) => (
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
