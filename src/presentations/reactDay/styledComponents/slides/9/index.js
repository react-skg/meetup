import React from "react";
import { Heading, Slide } from "spectacle";

import Playground from "../../../common/playground/playground";

const jsxExample = (`
  // The Button from the last section without the interpolations
const Button = styled.button${'`'}
	color: palevioletred;
	font-size: 20px;
	margin: 10px;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
  background: transparent;
${'`'};

// We're extending Button with some extra styles
const TomatoButton = Button.extend${'`'}
	color: tomato;
	border-color: tomato;
${'`'};

render(
	<div>
		<Button>Normal Button</Button>
		<TomatoButton>Tomato Button</TomatoButton>
	</div>
);
`).trim();

export default (
  <Slide transition={["slide"]} style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)', color: 'white'}}>
    <Heading size={3} style={{ color: 'white' }}>Extending Styles</Heading>
    <br />
    <br />
    <br />
    <div>
      <Playground code={jsxExample} noInline/>
    </div>
  </Slide>
);
