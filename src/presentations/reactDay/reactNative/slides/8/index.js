import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]}>
      <Heading size={1}>
        The State
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">Redux or any other Flux based tool</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Observables</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Immutables</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Lodash, underscore</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Moment</ListItem></Appear>
      </List>
  </Slide>
);
