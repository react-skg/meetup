import React from "react";
import { Heading, Slide } from "spectacle";
import { ThemeProvider  } from 'styled-components';

import Playground from "../../../common/playground/playground";

const jsxExample = (`
    const Button = styled.button${'`'}
  	/* Adapt the colours based on primary prop */
  	background: ${'${'}props => props.primary ? 'palevioletred' : 'white'${'}'};
  	color: ${'${'}props => props.primary ? 'white' : 'palevioletred'${'}'};

  	font-size: 24px;
  	margin: 10px;
  	padding: 0.25em 1em;
  	border: 2px solid palevioletred;
  	border-radius: 3px;
  ${'`'};

  render(
  	<div>
  		<Button>Normal</Button>
  		<Button primary>Primary</Button>
  	</div>
  );
  `).trim()

export default (
  <Slide transition={["slide"]} style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)', color: 'white'}}>
    <Heading size={3} style={{ color: 'white' }}>Adapting based on props</Heading>
    <br />
    <br />
    <br />
    <div>
      <Playground code={jsxExample} noInline scope={{ ThemeProvider }}/>
    </div>
  </Slide>
);
