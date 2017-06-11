import React, { Component } from 'react';
import mapValues from "lodash/mapValues";
import CodeSlide from 'spectacle-code-slide';
// Import theme
import createTheme from "spectacle/lib/themes/default";

import {
   Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
   Heading, Image, Layout, ListItem, List, Link, Quote, Slide, Text,
} from 'spectacle';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import { theme } from "../common/themes/darkTheme.js";
const slideTransition = ["slide"];

const images = mapValues({
  flux: require("./assets/flux.png"),
  dispatcher: require("./assets/dispatcher.png"),
  stores: require("./assets/stores.png"),
  actions: require("./assets/actions.png"),
  views: require("./assets/views.png")
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
              <Appear><ListItem textColor="secondary">Application state, UI state</ListItem></Appear>
              <Appear><ListItem textColor="secondary">Where to push it?</ListItem></Appear>
              <Appear><ListItem textColor="secondary">How to manipulate it?</ListItem></Appear>
              <Appear><ListItem textColor="secondary">How to propagate changes to the UI?</ListItem></Appear>
            </List>
        </Slide>

        <Slide transition={slideTransition}>
            <Heading size={1}>
              Solutions
            </Heading>
            <List>
              <Appear><ListItem textColor="secondary">Keep it all in React components (<b>App</b>?)</ListItem></Appear>
              <Appear><ListItem textColor="secondary"><Link textColor="tertiary" href="https://facebook.github.io/flux/">Flux</Link> - Actions, stores, dispatcher</ListItem></Appear>
              <Appear><ListItem textColor="secondary"><Link textColor="tertiary" href="http://redux.js.org/">Redux</Link> - Flux taken to bare minimum</ListItem></Appear>
              <Appear><ListItem textColor="secondary"><Link textColor="tertiary" href="https://mobxjs.github.io/mobx/">MobX</Link> - Observables, think spreadsheets</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
              <Image src={images.flux} margin="40px auto" height="310px" />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              The Dispatcher
            </Heading>
            <List>
              <Appear><ListItem textColor="secondary">It acts as the central hub for your application</ListItem></Appear>
              <Appear><ListItem textColor="secondary">A registry of callbacks. Stores register themselves by providing a callback. When a new action arrives, all callbacks are invoked </ListItem></Appear>
              <Appear><Image src={images.dispatcher} margin="30px" height="300px" /></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Stores
            </Heading>
            <List>
              <Appear><ListItem textColor="secondary">Contain application state and logic</ListItem></Appear>
              <Appear><ListItem textColor="secondary">Register themselves to the dispatcher with a callback.The callback receives one argument – the action</ListItem></Appear>
              <Appear><Image src={images.stores} margin="30px" height="300px" /></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Actions
            </Heading>
            <List>
              <Appear><ListItem textColor="secondary">Actions define an activity to be performed. They have type and payload</ListItem></Appear>
              <Appear><ListItem textColor="secondary">Stores use the action type to determine further processing</ListItem></Appear>
              <Appear><ListItem textColor="secondary">Action creators are helper methods to create actions. They call also the dispatcher with the newly created action</ListItem></Appear>
              <Appear><Image src={images.actions} margin="30px" height="327px" /></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Views
            </Heading>
            <List>
              <Appear><ListItem>React components</ListItem></Appear>
              <Appear><ListItem>Subscribe to stores and listen for changes</ListItem></Appear>
              <Appear><ListItem>Ensure one way of data flow. Only one view in a hierarchy listens for changes in the store</ListItem></Appear>
              <Appear><ListItem>Updates all other views underneath in the hierarchy</ListItem></Appear>
              <Appear><Image src={images.views} margin="30px" height="327px" /></Appear>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            textSize=".6em"
            code={`var Dispatcher = require(\'flux\').Dispatcher; \n`+
                  `var AppDispatcher = new Dispatcher();\n`+
                  'AppDispatcher.handleViewAction = function(action) {\n'+
                    'this.dispatch({\n'+
                    '  source: \'VIEW_ACTION\',\n'+
                      'action: action\n'+
                    '});\n' +
                    '}\n\n'+
                    'module.exports = AppDispatcher;'
                  }
            ranges={[
              { loc: [0, 1], note: "Importing flux Dispatcher" },
              { loc: [2, 3] }, //TodoList Component
              { loc: [4, 10], title: "Contructor Method" }
            ]}
            />
      </Deck>
    );
  }
}
