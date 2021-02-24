import PropTypes from "prop-types"
import React from "react"
import Link from "gatsby-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
<header style={{ 
  position: `fixed`, 
  display: `none`, 
  flexWrap: `wrap`, 
  top: `0%`, 
  width: `100%`, 
  margin: `0`, 
  padding: `0` }}>
    <div>
      <Link to="/" className="button3" style={{
        fontWeight: `700`,
      }}>
        jordan köerner
       </Link>
    </div>
          <a href="tel:+19497719024" className="button2" style={{
          }} >
          <FontAwesomeIcon icon={faPhone} size="1x" style={{
            background: `green`,
          }} />
          </a>
        <a href="mailto:jordan@ujely.com" className="button2">
        <FontAwesomeIcon icon={faEnvelope} size="1x" />
        </a>


         </header>
)
      
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
