import React, { Component } from 'react';

// import {
//   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
//   Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
// } from 'spectacle';

import { Deck, Slide, Text, BlockQuote, Quote } from 'spectacle';

import { theme } from "../common/themes/darkTheme.js";

export default class ServerSideRendering extends Component {
  render() {
    return (
      <Deck theme={theme} transition="slide" progress="pacman">
        <Slide id="slide1">
          <BlockQuote>
              <Quote textColor="#FFF">"Server Side Rendering"</Quote>
          </BlockQuote>
        </Slide>
        <Slide id="slide2">
          <Text>ServerSideRendering 2</Text>
        </Slide>
        <Slide id="slide3">
          <Text>ServerSideRendering 3</Text>
        </Slide>
        <Slide id="slide4">
          <Text>ServerSideRendering 4</Text>
        </Slide>
      </Deck>
    );
  }
}
