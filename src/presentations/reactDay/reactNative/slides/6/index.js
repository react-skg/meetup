import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]}>
      <Heading size={1}>
        The Design
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">Stylesheet.create()</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Uses a subset of CSS</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Layout with Flexbox</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Unique design per platform</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Change styles dynamically with functions</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Various UI and animation libraries</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Build your own UI library</ListItem></Appear>
      </List>
  </Slide>
);
