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
  background: `black`,
  color: `white`,
  margin: `0`,
  flexDirection: `row`,
  flexWrap: `nowrap`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  alignContent: `flex-end`,
  padding: `0 3vw`,
  }}>

        <a href="tel:+19497719024" style={{
          color: `white`,
          textDecoration: `none`,
          marginRight: `50px`,

        }}>  <FontAwesomeIcon icon={faPhone} size="1x" className="f2" 
        style={{ 
          color: `white`,
          marginLeft: `10px`,
          marginRight: `10px`,

                    }} />949-771-9024
        
          </a>
        <a href="mailto:jordan@ujely.com" style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}>
                          <FontAwesomeIcon icon={faEnvelope} size="1x" className="f3"
        style={{
          marginLeft: `10px`,
          marginRight: `10px`,
   
        }} />jordan@ujely.com
  
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
