import React from "react";
import { Heading, Slide, List } from "spectacle";

import ListItemControl from '../../components/listItemControl/listItemControl';

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">Virtual DOM</Heading>
        <List style={{marginTop: '40px'}}>
          <ListItemControl>DOM: abstraction of HTML</ListItemControl>
          <ListItemControl>Virtual DOM: abstraction of DOM</ListItemControl>
          <ListItemControl>Compute & apply diffs</ListItemControl>
          <ListItemControl>Re render the app</ListItemControl>
        </List>
    </Slide>
);
