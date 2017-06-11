import React, { Component } from 'react';

// import {
//   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
//   Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
// } from 'spectacle';

import { Deck, Slide, Text, Appear, List, ListItem, Heading } from 'spectacle';

import { theme } from '../common/themes/darkTheme';

export default class ReactRouter extends Component {
  render() {
    return (
      <Deck theme={theme} transition="slide" progress="pacman">
        <Slide transition={['fade']} bgColor="primary">
          <Heading>React Router v4</Heading>
          <List>
            <Appear><ListItem>What is it. (Do I need it?)</ListItem></Appear>
            <Appear><ListItem>How we can use it.</ListItem></Appear>
            <Appear><ListItem>Analyze all the different types of components that we can use for declaring routes.</ListItem></Appear>
            <Appear><ListItem>Route auth, prompts and redirects.</ListItem></Appear>
            <Appear><ListItem>How can I get the Router's params in a deeply nested component.</ListItem></Appear>
            <Appear><ListItem>Animated route changing.</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading>React Router v4</Heading>
          <List>
            <Appear><ListItem>Industry standard for client side routing with React.</ListItem></Appear>
            <Appear><ListItem>JSX and Virtual DOM</ListItem></Appear>
            <Appear><ListItem>State & Events</ListItem></Appear>
            <Appear><ListItem>Going Large Scale with React JS</ListItem></Appear>
          </List>
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
