import React from "react";
import { Heading, Slide, List } from "spectacle";

import ListItemControl from '../../components/listItemControl/listItemControl'

export default (
    <Slide transition={["fade"]} bgColor="primary">
      <Heading textColor="tertiary">What is React JS</Heading>
        <List>
          <ListItemControl>Facebook UI library</ListItemControl>
          <ListItemControl>Creator: Jordan Walke (@jordwalke)</ListItemControl>
        </List>
    </Slide>
);
