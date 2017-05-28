import React from "react";
import { Heading, Slide } from "spectacle";

import Counter from '../../assets/counter';

export default (
    <Slide transition={["zoom"]} bgColor="primary">
        <Heading textColor="tertiary">Counter Component Demo</Heading>
        <Counter />
    </Slide>
);
