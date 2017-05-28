import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading>Virtual DOM</Heading>
        <List>
          <ListItem>DOM: abstraction of a structured text</ListItem>
          <ListItem>Virtual DOM: abstraction of the HTML DOM</ListItem>
          <ListItem>React computes diffs using Virtual DOM</ListItem>
          <ListItem>React applies diffs to DOM</ListItem>
          <ListItem>Re render the app</ListItem>
        </List>
    </Slide>
);
