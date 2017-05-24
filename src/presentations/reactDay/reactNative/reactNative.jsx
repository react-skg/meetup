import React, { Component } from 'react';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
} from 'spectacle';

import theme from "../common/theme.js";

export default class ReactNative extends Component {
  render() {
    return (
      <Deck theme={theme} transition="slide" progress="pacman">
        <Slide id="pavkout" notes="papapapapap">
          <Text>Hello 1</Text>
        </Slide>
        <Slide>
          <Text>Hello 2</Text>
        </Slide>
        <Slide>
          <Text>Hello 3</Text>
        </Slide>
        <Slide>
          <Text>Hello 4</Text>
        </Slide>
      </Deck>
    );
  }
}
