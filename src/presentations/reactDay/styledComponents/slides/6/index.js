import React from "react";
import { Heading, Slide } from "spectacle";
import styled from 'styled-components';

import Playground from "../../../common/playground/playground";

const jsxExample = (`
  const Input = styled.input\`
  	padding: 0.5em;
  	margin: 0.5em;
  	color: palevioletred;
  	background: papayawhip;
  	border: none;
  	border-radius: 3px;
  \`;

  render(
	<div>
    // Comment\n<div>Hello World!</div>
		<Input placeholder="@mxstbr" type="text" />
		<Input value="@geelen" type="text" />
	</div>
);
`).trim();

export default (
  <Slide transition={["slide"]}>
    <Heading size={1}>Example</Heading>
  <br />
  <br />
  <br />
    <div>
      <Playground code={jsxExample} noInline/>
    </div>
  </Slide>
);
