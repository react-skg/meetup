import React, { Component } from 'react';

// import {
//   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
//   Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
// } from 'spectacle';

import { Deck, Slide, Text } from 'spectacle';

import theme from "../common/theme.js";

export default class StateManagement extends Component {
  render() {
    return (
      <Deck transition="slide" progress="pacman">
        <Slide id="slide1">
          <Text>StateManagement 1</Text>
        </Slide>
        <Slide id="slide2">
          <Text>StateManagement 2</Text>
        </Slide>
        <Slide id="slide3">
          <Text>StateManagement 3</Text>
        </Slide>
        <Slide id="slide4">
          <Text>StateManagement 4</Text>
        </Slide>
      </Deck>
    );
  }
}