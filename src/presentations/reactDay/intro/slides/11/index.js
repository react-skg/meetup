import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">Virtual DOM</Heading>
        <List>
          <Appear><ListItem>DOM: abstraction of HTML</ListItem></Appear>
          <Appear><ListItem>Virtual DOM: abstraction of DOM</ListItem></Appear>
          <Appear><ListItem>Compute & apply diffs</ListItem></Appear>
          <Appear><ListItem>Re render the app</ListItem></Appear>
        </List>
    </Slide>
);
