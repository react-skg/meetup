import React from "react";
import { Heading, Slide } from "spectacle";
import { keyframes } from 'styled-components';

import Playground from "../../../common/playground/playground";

const jsxExample = (`
  // keyframes returns a unique name based on a hash of the contents of the keyframes
const rotate360 = keyframes${'`'}
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
${'`'};

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div${'`'}
	display: inline-block;
	animation: ${'${'}rotate360} 2s linear infinite;
	padding: 2rem 1rem;
	font-size: 1.2rem;
${'`'};

render(
	<Rotate>&lt; 💅 &gt;</Rotate>
);
`).trim();

export default (
  <Slide transition={["slide"]} style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)', color: 'white'}}>
    <Heading size={3} style={{ color: 'white' }}>Animation</Heading>
    <br />
    <br />
    <br />
    <div>
      <Playground code={jsxExample} noInline scope={{ keyframes }}/>
    </div>
  </Slide>
);
