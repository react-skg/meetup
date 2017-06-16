import React from "react";
import { Heading, Slide, List } from "spectacle";

import ListItemControl from '../../components/listItemControl/listItemControl';

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">Large Scale with React</Heading>
          <List>
            <ListItemControl>Flux Pattern</ListItemControl>
            <ListItemControl>JSX & ES6: Babel</ListItemControl>
            <ListItemControl>Build Tools: Webpack</ListItemControl>
            <ListItemControl>UI Components: react-bootstrap</ListItemControl>
            <ListItemControl>Routing: react-router</ListItemControl>
            <ListItemControl>Development: Hot Reload</ListItemControl>
            <ListItemControl>Testing: Karma JS, Jasmine, Jest</ListItemControl>
          </List>
    </Slide>
);
