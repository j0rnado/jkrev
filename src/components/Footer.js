import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"


const Footer = ({ siteTitle }) => (

  <footer style={{ 
  display: `flex`,
  width: `20vw`, 
  height: `50px`,
  bottom: `0`,
  right: `0`,
  position: `fixed`,
  background: `black`,
  color: `white`,
  margin: `0`,
  flexDirection: `row`,
  flexWrap: `nowrap`,
  justifyContent: `center`,
  alignItems: `center`,
  
  zIndex: `9000000`,
  }}>

        <a href="tel:+19497719024" style={{
          color: `white`,
          textDecoration: `none`,

        }}>  <FontAwesomeIcon icon={faPhone} size="1x" className="f2" 
        style={{ 
          color: `white`,
          marginLeft: `10px`,
          marginRight: `10px`,

                    }} />
        
          </a>
        <a href="mailto:jordan@ujely.com" style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}>
                          <FontAwesomeIcon icon={faEnvelope} size="1x" className="f3"
        style={{
          marginLeft: `10px`,
          marginRight: `10px`,
   
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
