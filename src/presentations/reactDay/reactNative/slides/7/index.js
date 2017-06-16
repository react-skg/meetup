import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]}>
      <Heading size={1}>
        Fetching Data
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">fetch</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Or any other npm package</ListItem></Appear>
      </List>
  </Slide>
);
