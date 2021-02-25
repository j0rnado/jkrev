import React from 'react';

const FlexDirectionBasics = () => {
    return (
      // Try setting `flexDirection` to `column`.
      <div style={{ display: `flex`, flexDirection: `row`,  
      justifyContent: 'space-between', height: `50%`,}}>
        <div style={{width: `33%`, backgroundColor: 'powderblue'}}>x</div>
        <div style={{width: `33%`,  backgroundColor: 'skyblue'}} >y</div>
        <div style={{width: `33%`, backgroundColor: 'steelblue'}} >z</div>
      </div>
    );
};

export default FlexDirectionBasics;