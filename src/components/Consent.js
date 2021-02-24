import React from "react"
import CookieConsent from 'react-cookie-consent';
import { Link } from "gatsby";

const Consent = () => { 
  return (
  <div style={{ display: `none` }}>
<CookieConsent
          location="top"
          buttonText="Accept" 
          declineButtonText="Decline" 
          cookieName="gatsby-plugin-gdpr-cookies"
          enableDeclineButton="false"
          style={{ display: `none`, padding: `0`, margin: `0`, fontSize: `12px`, background: `#FF66C4`, color: `white`, font: `Open Sans`, width: `100%` }}
          declineButtonStyle={{ display: `none`, fontSize: `12px`, background: `transparent`, color: `white`, borderStyle: `solid`, borderColor: `white`, borderWidth: `1px`, borderBackground: `white` }} 
          buttonStyle={{ fontSize: `14px`, font: `Open Sans`, color: `#5E17EB`, borderStyle: `solid`, borderColor: `#5E17EB`, borderWidth: `1px`, background: `white`, borderBackground: `white`  }}
          contentStyle={{ width: `100%`, height: `auto`, flex: `1` }}
          
          >We use cookies to improve your experience. <Link to="/privacy-policy" style={{ textDecoration: `underline`, color: `#004AAD`, background: `transparent` }}>Click here</Link>  to learn more.
        </CookieConsent> 
        </div>  
  )    
}

export default Consent
