import React, { Component } from 'react';

// import {
//   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
//   Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
// } from 'spectacle';

import { Deck, Text, BlockQuote,
Quote, ListItem, List, Heading, Link } from 'spectacle';

import IntroSlide from './components/introSlide/introSlide';

import { theme } from "../common/themes/darkTheme.js";


export default class Intro extends Component {

  render() {
    return (
      <Deck transition={["zoom"]} theme={theme} transitionDuration={500}>
        <IntroSlide priority={1}>
          <Heading size={1} fit caps lineHeight={1}>
            React JS
          </Heading>
          <Heading size={4} lineHeight={1.5} fit caps>
            Introduction
          </Heading>
        </IntroSlide>
        <IntroSlide priority={2}>
          <Heading>Today we will talk about...</Heading>
          <List>
            <ListItem>What is React JS</ListItem>
            <ListItem>JSX and Virtual DOM</ListItem>
            <ListItem>State & Events</ListItem>
            <ListItem>Going Large Scale with React JS</ListItem>
          </List>
        </IntroSlide>
        <IntroSlide priority={3}>
          <Heading>What is React JS</Heading>
          <List>
            <ListItem>User Interfaces</ListItem>
            <ListItem>Components</ListItem>
            <ListItem>JSX Converter</ListItem>
            <ListItem>Virtual DOM</ListItem>
          </List>
        </IntroSlide>
        <IntroSlide priority={4}>
          <Heading>Who is using React?  </Heading>
          <List>
            <ListItem>Instagram is 100% build on React</ListItem>
            <ListItem>Facebook has over 15.000 React Components</ListItem>
            <ListItem>Netflix, Khan Academy, Flipboard, Yahoo</ListItem>
            <ListItem>Atom Features</ListItem>
            <ListItem>Wordpress Calypso</ListItem>
          </List>
        </IntroSlide>
        <IntroSlide priority={5}>
          <Heading>Components</Heading>
          <List>
            <ListItem>Model your app as a components hierarchy</ListItem>
            <ListItem>Each component have props and state</ListItem>
            <ListItem>React Lifecycle hooks</ListItem>
          </List>
        </IntroSlide>
        <IntroSlide priority={6}>
          <Heading>Counter Component Demo</Heading>
        </IntroSlide>
        <IntroSlide priority={7}>
          <Heading>Counter Component Demo Code</Heading>
        </IntroSlide>
        <IntroSlide priority={8}>
          <Heading>JSX</Heading>
          <List>
            <ListItem>Syntactic sugar for React.createElement</ListItem>
            <ListItem>React must be in scope</ListItem>
            <ListItem>Use Dot Notation</ListItem>
          </List>
        </IntroSlide>
        <IntroSlide priority={9}>
          <Heading>JSX or No JSX</Heading>
          <Text>JSX Code</Text>
          <Text>How JSX Code is compiled</Text>
        </IntroSlide>
        <IntroSlide priority={10}>
          <Heading>Virtual DOM</Heading>
          <List>
            <ListItem>DOM: abstraction of a structured text</ListItem>
            <ListItem>Virtual DOM: abstraction of the HTML DOM</ListItem>
            <ListItem>React computes diffs using Virtual DOM</ListItem>
            <ListItem>React applies diffs to DOM</ListItem>
            <ListItem>Re render the app</ListItem>
          </List>
        </IntroSlide>
        <IntroSlide priority={11}>
          <Heading>Large Scale with React</Heading>
          <List>
            <ListItem>Flux Pattern</ListItem>
            <ListItem>JSX & ES6: Babel</ListItem>
            <ListItem>Build Tools: Webpack, Grunt, Gulp</ListItem>
            <ListItem>UI Components: react-bootstrap, materialui</ListItem>
            <ListItem>Routing: react-router</ListItem>
            <ListItem>Development: Hot Reload</ListItem>
            <ListItem>Testing: Karma JS, Jasmine, Jest</ListItem>
          </List>
        </IntroSlide>
      </Deck>
    );
  }
}
