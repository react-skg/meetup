import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">Large Scale with React</Heading>
          <List>
            <ListItem>Flux Pattern</ListItem>
            <ListItem>JSX & ES6: Babel</ListItem>
            <ListItem>Build Tools: Webpack, Grunt, Gulp</ListItem>
            <ListItem>UI Components: react-bootstrap, materialui</ListItem>
            <ListItem>Routing: react-router</ListItem>
            <ListItem>Development: Hot Reload</ListItem>
            <ListItem>Testing: Karma JS, Jasmine, Jest</ListItem>
          </List>
    </Slide>
);
