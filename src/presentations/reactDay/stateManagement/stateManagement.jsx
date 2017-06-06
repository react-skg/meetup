import React, { Component } from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from "spectacle";

import { theme } from "../common/themes/darkTheme.js";

const slideTransition = ["slide"];

export default class StateManagement extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500} progress="pacman">
          <Slide id="slide1">
            <BlockQuote>
                <Quote textColor="#FFF">"State Management"</Quote>
            </BlockQuote>
          </Slide>
          <Slide id="slide2">
            <Text>The Problem of State</Text>
          </Slide>
          <Slide id="slide3">
            <Text>StateManagement 3</Text>
          </Slide>
          <Slide id="slide4">
            <Text>StateManagement 4</Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
