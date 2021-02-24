import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"


const Footer = ({ siteTitle }) => (
  <footer className="foot-container" style={{ 
  display: `flex`,
  width: `50%`, 
  minHeight: `8vh`,
  bottom: `0`,
  position: `fixed`,
  right: `0`,
  background: `black`,
  color: `white`,
  margin: `auto`
  }}>
<div className="f1" style={{
    display: `grid`,
    justifyContent: `flex-end`,
}}>
  <h4 style={{
  display: `grid`,
  justifyContent: `flex-end`,
  margin: `0 0 0 0`,
  padding: `0 0 0 0`,
    }}>
GET IN TOUCH    </h4>
    </div>
        <a href="tel:+19497719024">
          <FontAwesomeIcon icon={faPhone} size="1x" className="f2" 
          style={{ 
            justifyContent: `flex-end`,
            alignItems: `flex-end`,
            color: `white`,
          }} />
          </a>
        <a href="mailto:jordan@ujely.com">
        <FontAwesomeIcon icon={faEnvelope} size="1x" className="f3"
        style={{
          color: `white`,
        }} />
        </a>

 
         </footer>
)
      
Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
