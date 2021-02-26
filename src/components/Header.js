import PropTypes from "prop-types"
import React from "react"
import Link from "gatsby-link"
import jork from "../images/jor.png"


const Header = ({ siteTitle }) => (
<header style={{ 
  background: `black`,
  flexWrap: `nowrap`,
  display: `flex`,
  flexDirection: `row`,
  position: `fixed`, 
  bottom: `0%`, 
  width: `100%`, 
  height: `50px`,
  margin: `0`, 
  padding: `0` ,
  justifyContent: `flex-end`,
  zIndex: `50000`,


  }}>
          <Link to="/">
  <button className="buttonJ" style={{
  }}>
    home 
    </button>
    </Link>
      <Link to="/about">
  <button className="buttonJ" style={{
  }}>
    about 
    </button>
    </Link>
    <Link to="/work" style={{
    }}>
    <button className="buttonJ" >
       work 

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
