import React from "react";
import { Heading, Slide } from "spectacle";
import { ThemeProvider  } from 'styled-components';

import Playground from "../../../common/playground/playground";

const jsxExample = (`
  // Define our button, but with the use of props.theme this time
const Button = styled.button${'`'}
	color: ${'${'}props => props.theme.fg};
	border: 2px solid ${'${'}props => props.theme.fg};
	background: ${'${'}props => props.theme.bg};

	font-size: 20px;
	margin: 10px;
	padding: 0.25em 1em;
	border-radius: 3px;
${'`'};

// Define our fg and bg on the theme
const theme = {
	fg: 'palevioletred',
	bg: 'white'
};

// This theme swaps fg and bg
const invertTheme = ({ fg, bg }) => ({
	fg: bg,
	bg: fg
});

render(
	<ThemeProvider theme={theme}>
		<div>
			<Button>Default Theme</Button>

			<ThemeProvider theme={invertTheme}>
				<Button>Inverted Theme</Button>
			</ThemeProvider>
		</div>
	</ThemeProvider>
);
  `).trim()

export default (
  <Slide transition={["slide"]}>

    <Heading size={3}>Theming</Heading>
    <br />
    <br />
    <br />
    <div>
      <Playground code={jsxExample} noInline scope={{ ThemeProvider }}/>
    </div>
  </Slide>
);
