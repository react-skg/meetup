import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">Virtual DOM</Heading>
        <List>
          <Appear><ListItem>DOM: abstraction of a structured text</ListItem></Appear>
          <Appear><ListItem>Virtual DOM: abstraction of the HTML DOM</ListItem></Appear>
          <Appear><ListItem>React computes diffs using Virtual DOM</ListItem></Appear>
          <Appear><ListItem>React applies diffs to DOM</ListItem></Appear>
          <Appear><ListItem>Re render the app</ListItem></Appear>
        </List>
    </Slide>
);
