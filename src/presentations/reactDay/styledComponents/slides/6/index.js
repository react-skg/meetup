import React from "react";
import { Heading, Slide } from "spectacle";

export default (
  <Slide transition={["slide"]}>
    <Heading size={1}>Installation</Heading>
    <br />
    <br />
  <pre
    style={{
      background: '#1d1f27',
      fontSize: '0.8em',
      fontWeight: '300',
      whiteSpace: 'pre-wrap',
      borderRadius: '0.16666666666666666rem',
      boxShadow: '1px 1px 20px rgba(20, 20, 20, 0.27)',
      padding: '1.9444444444444444rem 0',
      overflowX: 'hidden',
      color: 'white'
    }}
  >$ npm install --save styled-components</pre>
  </Slide>
);
