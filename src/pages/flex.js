import React from 'react';
import Layout from "../components/layout"
import portrait from "../images/portrait2.jpg"

const Flex = () => {
    return (
<Layout>
<div className="home-container">
<div className="a" style={{
  height: `50vh`,
  width: `50vw`,
  }}>
  <h1 style={{
    color: `black`,
    fontFamily: `Poppins`,
    fontWeight: `700`,
    margin: `15vh 0vw 0vh 0vw`,
    padding: `5vh 3vw 6vh 3vw`,
    textAlign: `right`,
      }}>
        hi, i'm jordan köerner
        </h1>
</div>
<div className="b" style={{
  height: `50vh`,
  width: `50vw`,
  color: `white`,
}}>
<h1 style={{
    background: `red`,
  fontFamily: `Poppins`,
  fontWeight: `700`,
  margin: `19vh 3vw 0vh 0vw`,
  padding: `1vh 3vw 0vh 3vw`,
}}>i manage tech projects</h1>
</div>
<div className="d" 
style={{
  height: `45vh`,
  width: `50vw`,
  textAlign: `center`,
  textJustify: `auto`,
  alignItems: `center`,
  justifyContent: `center`,
}}><h4 style={{
  color: `black`,
  fontFamily: `Poppins`,
  fontWeight: `700`,
  margin: `0vh 3vw 0vh 6vw`,
  padding: `5vh 3vw 6vh 0vw`,
  textAlign: `left`, 
  }}>
  <ul>mobile apps</ul>
  <ul>web apps/sites</ul>
  <ul>e-commerce</ul>
  <ul>advertising</ul>
  <ul>digital marketing</ul>
  <ul>strategic planning</ul>
  </h4>
  </div>
<div className="c" 
style={{
  height: `45vh`,
  width: `50vw`,
  backgroundImage: `url(${portrait})`, 
    backgroundRepeat: `no-repeat`,
    backgroundSize: `36vh`,
    backgroundPosition: `center`,
    }}>
</div>

</div>
</Layout>

      
    );
};

export default Flex;