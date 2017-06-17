import React from "react";
import { Heading, Slide } from "spectacle";

export default (
  <Slide transition={["slide"]} style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)', color: 'white'}}>
    <Heading size={3} style={{ color: 'white' }}>Installation</Heading>
    <br />
    <br />
  <pre
    style={{
      background: '#1d1f27',
      fontSize: '0.8em',
      fontWeight: '300',
      whiteSpace: 'pre-wrap',
      border: 'none',
      borderRadius: '0.16666666666666666rem',
      boxShadow: ' 0 10px 15px rgba(0,0,0,1)',
      padding: '1.9444444444444444rem 0',
      overflowX: 'hidden',
      color: 'white'
    }}
  >$ npm install --save styled-components</pre>
  </Slide>
);
