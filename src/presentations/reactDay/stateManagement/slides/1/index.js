import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]}>
      <Heading size={1}>
        The Problem of State
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">Application state, UI state</ListItem></Appear>
        <Appear><ListItem textColor="secondary">How to manipulate it?</ListItem></Appear>
        <Appear><ListItem textColor="secondary">How to propagate changes to the UI?</ListItem></Appear>
      </List>
  </Slide>
);
