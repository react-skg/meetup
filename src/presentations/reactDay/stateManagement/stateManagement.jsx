import React, { Component } from 'react';
import mapValues from "lodash/mapValues";
// Import theme
import createTheme from "spectacle/lib/themes/default";

import {
   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
   Heading, Image, Layout, ListItem, List,Link, Quote, Slide, Text,
} from 'spectacle';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
}, {
	primary: "Open Sans Condensed"
});

const slideTransition = ["slide"];

const images = mapValues({
  flux: require("./assets/flux.png")
}, v => v.replace('/', ''));

preloader(images);

export default class StateManagement extends Component {
  render() {
    return (
      <Deck theme={theme} transition={slideTransition} transitionDuration={500} progress="pacman">
        <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              State Management in React
            </Heading>
        </Slide>

        <Slide transition={slideTransition}>
            <Heading size={1}>
              The Problem of State
            </Heading>
            <List>
              <Appear><ListItem>Application state, UI state</ListItem></Appear>
              <Appear><ListItem>Where to push it?</ListItem></Appear>
              <Appear><ListItem>How to manipulate it?</ListItem></Appear>
              <Appear><ListItem>How to propagate changes to the UI?</ListItem></Appear>
            </List>
        </Slide>

        <Slide transition={slideTransition}>
            <Heading size={1}>
              Solutions
            </Heading>
            <List>
              <Appear><ListItem>Keep it all in React components (<b>App</b>?)</ListItem></Appear>
              <Appear><ListItem><Link href="https://facebook.github.io/flux/">Flux</Link> - Actions, stores, dispatcher</ListItem></Appear>
              <Appear><ListItem><Link href="http://redux.js.org/">Redux</Link> - Flux taken to bare minimum</ListItem></Appear>
              <Appear><ListItem><Link href="https://mobxjs.github.io/mobx/">MobX</Link> - Observables, think spreadsheets</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
              <Image src={images.flux} margin="40px auto" height="324px" />
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Heading size={2} textColor="tertiary">
              Code Sample
            </Heading>
          </Slide>
      </Deck>
    );
  }
}
