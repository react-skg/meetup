import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">JSX</Heading>
        <List>
          <Appear><ListItem>XML/HTML-like text</ListItem></Appear>
          <Appear><ListItem>Preprocessors transform to js</ListItem></Appear>
          <Appear><ListItem>React.createElement()</ListItem></Appear>
        </List>
    </Slide>
);
