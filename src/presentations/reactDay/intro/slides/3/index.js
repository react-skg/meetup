import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
    <Slide transition={["fade"]} bgColor="primary">
      <Heading textColor="tertiary">What is React JS</Heading>
        <List>
          <Appear><ListItem>User Interfaces</ListItem></Appear>
          <Appear><ListItem>Components</ListItem></Appear>
          <Appear><ListItem>JSX Converter</ListItem></Appear>
          <Appear><ListItem>Virtual DOM</ListItem></Appear>
        </List>
    </Slide>
);