import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
      <Heading textColor="tertiary">What is React JS</Heading>
        <List>
          <ListItem>User Interfaces</ListItem>
          <ListItem>Components</ListItem>
          <ListItem>JSX Converter</ListItem>
          <ListItem>Virtual DOM</ListItem>
        </List>
    </Slide>
);
