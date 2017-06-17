import React from "react";
import { Heading, Slide } from "spectacle";

import Playground from "../../../common/playground/playground";

const jsxExample = (`
  const Button = styled.button\`
  	display: inline-block;
    background: transparent;
  	color: palevioletred;
  	font-size: 24px;
  	margin: 10px;
  	padding: 0.25em 1em;
  	border: 2px solid palevioletred;
  	border-radius: 3px;
  \`;

  // We're replacing the <button> tag with an <a> tag, but reuse all the same styles
  const Link = Button.withComponent('a')

  // Use .withComponent together with .extend to both change the tag and use additional styles
  const TomatoLink = Link.extend\`
  	color: tomato;
  	border-color: tomato;
  \`;

  render(
  	<div>
  		<Button>Normal Button</Button>
  		<Link>Normal Link</Link>
  		<TomatoLink>Tomato Link</TomatoLink>
  	</div>
  );
`).trim();

export default (
  <Slide transition={["slide"]} style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)', color: 'white'}}>
    <Heading size={3} style={{ color: 'white' }}>Use withComponent</Heading>
    <br />
    <br />
    <br />
    <div>
      <Playground code={jsxExample} noInline/>
    </div>
  </Slide>
);
