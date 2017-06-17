import React from "react";
import { Heading, Slide, List } from "spectacle";

import ListItemControl from '../../components/listItemControl/listItemControl';

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">JSX</Heading>
        <List>
          <ListItemControl>XML/HTML-like text</ListItemControl>
          <ListItemControl>Preprocessors transform to js</ListItemControl>
          <ListItemControl>React.createElement()</ListItemControl>
        </List>
    </Slide>
);
