import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]}>
      <Heading size={1}>
        The methods
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">CSS</ListItem></Appear>
        <Appear><ListItem textColor="secondary">CSS Modules</ListItem></Appear>
        <Appear><ListItem textColor="secondary">JSS</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Aphrodite</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Radium</ListItem></Appear>
      </List>
  </Slide>
);
