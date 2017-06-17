import React from "react";
import { Heading, Slide } from "spectacle";

import './slide.post.css';

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
          React
        </Heading>
        <Heading size={4} lineHeight={1.5} fit caps textColor="tertiary">
          Introduction
        </Heading>
        <div className="intro-presentation-author fadeInUp animated">
          Savramis Sartios
        </div>
    </Slide>
);
