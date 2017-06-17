import React from "react";
import { Heading, Slide, List } from "spectacle";

import ListItemControl from '../../components/listItemControl/listItemControl'

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">Components</Heading>
        <List style={{marginTop: '40px'}}>
          <ListItemControl>Building Block</ListItemControl>
          <ListItemControl>Props and State</ListItemControl>
          <ListItemControl>Lifecycle</ListItemControl>
        </List>
    </Slide>
);
