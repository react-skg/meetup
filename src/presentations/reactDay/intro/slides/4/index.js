import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
      <Heading textColor="tertiary">Who is using React?</Heading>
        <List>
          <Appear><ListItem>Instagram is 100% build on React</ListItem></Appear>
          <Appear><ListItem>Facebook has over 15.000 React Components</ListItem></Appear>
          <Appear><ListItem>Netflix, Khan Academy, Flipboard, Yahoo</ListItem></Appear>
          <Appear><ListItem>Atom Features</ListItem></Appear>
          <Appear><ListItem>Wordpress Calypso</ListItem></Appear>
        </List>
    </Slide>
);
