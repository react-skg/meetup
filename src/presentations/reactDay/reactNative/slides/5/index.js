import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]}>
      <Heading size={1}>
        The Ecosystem
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">The library you already know</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Your beloved packages</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Not just a library, a framework</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Easy Setup & Upgrade</ListItem></Appear>
        <Appear><ListItem textColor="secondary">A new set of Components</ListItem></Appear>
        <Appear><ListItem textColor="secondary">2 Apps in one</ListItem></Appear>
        <Appear><ListItem textColor="secondary">ES6 is supported</ListItem></Appear>
      </List>
  </Slide>
);
