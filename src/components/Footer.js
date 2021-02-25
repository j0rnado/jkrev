import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"


const Footer = ({ siteTitle }) => (

  <footer style={{ 
  display: `flex`,
  width: `100%`, 
  minHeight: `50px`,
  bottom: `0`,
  position: `fixed`,
  right: `0`,
  background: `black`,
  color: `white`,
  margin: `auto`
  }}>

        <a href="tel:+19497719024" style={{
          color: `white`,
          textDecoration: `none`,

        }}>949-771-9024
          <FontAwesomeIcon icon={faPhone} size="1x" className="f2" 
          style={{ 
            color: `white`,
            marginLeft: `20px`,
            marginRight: `50px`,
          }} />
          </a>
        <a href="mailto:jordan@ujely.com" style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}>jordan@ujely.com
        <FontAwesomeIcon icon={faEnvelope} size="1x" className="f3"
        style={{
          color: `white`,
          marginLeft: `20px`,
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
