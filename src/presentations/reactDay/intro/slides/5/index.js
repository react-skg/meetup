import React from "react";
import { Heading, Slide, List } from "spectacle";

import ListItemControl from '../../components/listItemControl/listItemControl'

export default (
    <Slide transition={["fade"]} bgColor="primary">
      <Heading textColor="tertiary">React Concepts</Heading>
        <List style={{marginTop: '40px'}}>
          <ListItemControl>Components</ListItemControl>
          <ListItemControl>JSX Converter</ListItemControl>
          <ListItemControl>Virtual DOM</ListItemControl>
        </List>
    </Slide>
);
