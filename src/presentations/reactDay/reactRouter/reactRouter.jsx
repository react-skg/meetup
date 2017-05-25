import React, { Component } from 'react';

// import {
//   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
//   Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
// } from 'spectacle';

import { Deck, Slide, Text } from 'spectacle';

import { theme } from "../common/themes/darkTheme.js";

export default class ReactRouter extends Component {
  render() {
    return (
      <Deck theme={theme} transition="slide" progress="pacman">
        <Slide id="slide1">
          <Text>ReactRouter 1</Text>
        </Slide>
        <Slide id="slide2">
          <Text>ReactRouter 2</Text>
        </Slide>
        <Slide id="slide3">
          <Text>ReactRouter 3</Text>
        </Slide>
        <Slide id="slide4">
          <Text>ReactRouter 4</Text>
        </Slide>
      </Deck>
    );
  }
}
