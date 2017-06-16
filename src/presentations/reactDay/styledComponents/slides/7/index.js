import React from "react";
import { Heading, Slide } from "spectacle";

import Playground from "../../../common/playground/playground";

const jsxExample = (`
  // Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1${'`'}
	font-size: 1em;
	text-align: center;
	color: palevioletred;
${'`'};

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section${'`'}
	padding: 1em;
	background: papayawhip;
${'`'};

// Use Title and Wrapper like any other React component – except they're styled!
render(
	<Wrapper>
		<Title>
			Hello World, this is my first styled component!
		</Title>
	</Wrapper>
);
`).trim();

export default (
  <Slide transition={["slide"]}>
    <Heading size={1}>Getting Started</Heading>
  <br />
  <br />
  <br />
    <div>
      <Playground code={jsxExample} noInline/>
    </div>
  </Slide>
);
