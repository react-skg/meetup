import React from "react";
import { Heading, Slide, List, Appear } from "spectacle";

import ListItemControl from '../../components/listItemControl/listItemControl';

export default (
    <Slide transition={["fade"]} bgColor="primary">
      <Heading>Today we will talk about...</Heading>
        <List className="slide-2-list-content">
          <ListItemControl
            className="fadeInUp animated" animationDelay="1s">
            What is React JS
          </ListItemControl>
          <ListItemControl
            className="fadeInUp animated" animationDelay="3s">
            JSX and Virtual DOM
          </ListItemControl>
          <ListItemControl
            className="fadeInUp animated" animationDelay="5s">
            State & Events
          </ListItemControl>
            <ListItemControl
              className="fadeInUp animated" animationDelay="7s">
              Going Large Scale with React JS
            </ListItemControl>
        </List>
    </Slide>
);
