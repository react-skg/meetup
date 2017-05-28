import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">JSX</Heading>
        <List>
          <ListItem>Syntactic sugar for React.createElement</ListItem>
          <ListItem>React must be in scope</ListItem>
          <ListItem>Use Dot Notation</ListItem>
        </List>
    </Slide>
);
