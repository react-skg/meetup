import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading>Today we will talk about...</Heading>
        <List>
          <ListItem>What is React JS</ListItem>
          <ListItem>JSX and Virtual DOM</ListItem>
          <ListItem>State & Events</ListItem>
          <ListItem>Going Large Scale with React JS</ListItem>
        </List>
    </Slide>
);
