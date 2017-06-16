import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]}>
      <Heading size={1}>
        A new set of Components
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">View, acts like a div</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Text, displays labels</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Image, displays images</ListItem></Appear>
        <Appear><ListItem textColor="secondary">ScrollView, ListView, </ListItem></Appear>
        <Appear><ListItem textColor="secondary">Build in maps, navigation, modal, inputs</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Third-party UI sets</ListItem></Appear>
      </List>
  </Slide>
);
