import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
      <Heading textColor="tertiary">Who is using React?</Heading>
        <List>
          <ListItem>Instagram is 100% build on React</ListItem>
          <ListItem>Facebook has over 15.000 React Components</ListItem>
          <ListItem>Netflix, Khan Academy, Flipboard, Yahoo</ListItem>
          <ListItem>Atom Features</ListItem>
          <ListItem>Wordpress Calypso</ListItem>
        </List>
    </Slide>
);
