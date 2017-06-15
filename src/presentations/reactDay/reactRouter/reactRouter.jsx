import React, { Component } from 'react';
import CodeSlide from 'spectacle-code-slide';
import { BrowserRouter as Router, Route, Switch, Redirect, Prompt } from 'react-router-dom';

import { simpleRouterCode, playGroundCode } from './assets';
import routerImage from '../../../assets/react-router/simpleRouter.PNG';
// import {
//   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
//   Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
// } from 'spectacle';

import { Deck, Slide, Text, Appear, List, ListItem, Heading, Code, ComponentPlayground } from 'spectacle';

import { theme } from '../common/themes/darkTheme';
import './reactRouter.post.css';

const style = {
  position: 'fixed',
  bottom: '20px',
  width: '100%',
  padding: '20px',
  fontFamily: 'monospace',
  textAlign: 'left',
};

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
        <CodeSlide
          style={style}
          transition={[]}
          lang="js"
          code={simpleRouterCode}
          ranges={[
            { loc: [0, 1], note: 'Import the components that your routes will lead to.' },
            { loc: [2, 6], note: 'Importing the <Router/> and <Route/> components' },
            { loc: [9, 23],
              image: routerImage,
              note: 'Each route will create an element. Notice the exact prop, \
              because we don\'t want <Speakers /> to be rendered in every route.' },
          ]}
        />
        <Slide id="slide3">
          <Heading textColor="#000" textSize="55px">
            <code>react-router</code> / Components
          </Heading>
          <Text>ReactRouter 3</Text>
        </Slide>
        <Slide transition={['zoom']}>
          <div id="react-router-playground">
            <ComponentPlayground
              theme="light"
              code={playGroundCode}
              scope={{
                Router,
                Route,
                Switch,
                Redirect,
                Prompt,
              }}
            />
          </div>
        </Slide>
        <Slide id="slide4">
          <Text>ReactRouter 4</Text>
        </Slide>
      </Deck>
    );
  }
}
