import PropTypes from "prop-types"
import React from "react"
import Link from "gatsby-link"
import jork from "../images/jork.svg"


const Header = ({ siteTitle }) => (
<header style={{ 
  display: `flex`,
  position: `fixed`, 
  top: `0%`, 
  width: `100%`, 
  margin: `0`, 
  padding: `0` }}>
      <Link to="/about">
  <button className="buttonJ" style={{
  }}>
    about me 
    </button>
    </Link>
    <Link to="/work" style={{
    }}>
    <button className="buttonJ" >
      my work 
    </button>
    </Link>

    <Link to="/services">
    <button className="buttonJ" >
      services 
    </button>
    </Link>
    <Link to="/contact">
    <button className="buttonJ" >
    contact   
    </button>
    </Link>

         </header>

)
      
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
