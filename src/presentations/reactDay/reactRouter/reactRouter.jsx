import React, { Component } from 'react';

// import {
//   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
//   Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
// } from 'spectacle';

import { Deck, Slide, Text, Appear, List, ListItem, Heading } from 'spectacle';

import { theme } from '../common/themes/darkTheme';

export default class ReactRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }

  render() {
    return (
      <Deck theme={theme} transition="slide" progress="pacman">
        <Slide transition={['fade']} bgColor="primary">
          <Heading><code>react-router</code> v4</Heading>
          <List ordered>
            <Appear><ListItem>What is it. (Do I need it?)</ListItem></Appear>
            <Appear><ListItem>How we can use it.</ListItem></Appear>
            <Appear>
              <ListItem>
                How to combine all the different types of components
                that we can use for declaring routes.
              </ListItem>
            </Appear>
            <Appear><ListItem>Route auth, prompts and redirects.</ListItem></Appear>
            <Appear><ListItem>How we can get the {'Router\'s'} params in a deeply nested component.</ListItem></Appear>
            <Appear><ListItem>Animated route changing.</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading textColor="#000" textSize="55px">
            <code>react-router</code> / What is it?
            </Heading>
          <List>
            <Appear>
              <ListItem textSize="35px">
                  Industry standard for client side routing with React.
                </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                  Its API changed in every major version, but in v4
                  it makes sense because it follows the React {'component\'s'} lifecycle.
                </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                  We can achieve selective rendering of components by
                  matching the path of each route.
                </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                  Restrict parts of our application and redirect
                  unauthorized users.
                </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                  Prompt users when the route will change in order for them not to lose unsaved data.
                </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                  Code splitting. Incrementally
                  download parts of our app, according to route matching.
                  (<code>webpack</code> / <code>bundle-loader</code> or alternative)
                </ListItem>
            </Appear>
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
