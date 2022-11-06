import React from 'react'
import FooterColumn from '../../components/footer/FooterColumn'
import { footerCopyright, footerAddress, footerContainersData } from './initialData'
import logo from '../../assets/logo.svg'
import './footer.css'


const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      <button type="button">Request Early Access</button>
    </div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="logo" />
        <p>{footerAddress}</p>
      </div>
      <div className="gpt3__footer-links_container">
        {
          footerContainersData.map((item, i) =>
            <FooterColumn key={i} {...item} />
          )
        }
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p>{footerCopyright}</p>
    </div>
  </div>
)


export default Footer
