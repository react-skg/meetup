import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
      <Heading>Today we will talk about...</Heading>
        <List>
          <Appear><ListItem>What is React JS</ListItem></Appear>
          <Appear><ListItem>JSX and Virtual DOM</ListItem></Appear>
          <Appear><ListItem>State & Events</ListItem></Appear>
          <Appear><ListItem>Going Large Scale with React JS</ListItem></Appear>
        </List>
    </Slide>
);
