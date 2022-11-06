import React from 'react'
import './footerColumn.css'


const FooterColumn = ({ header, links }) => (
  <div className="gpt3__footer-links_container-column">
    <h4>{header}</h4>
    {
      links.map((link, i) =>
        <a href={link.href} key={i}>{link.name}</a>
      )
    }
  </div>
)


export default FooterColumn
