import React from "react";
import { Heading, Slide } from "spectacle";

import Playground from "../../../common/playground/playground";

const jsxExample = (`
<h3>
  Hello World!
</h3>
`).trim();

export default (
  <Slide transition={["slide"]}>
    <Heading size={1}>Example</Heading>
  <br />
  <br />
  <br />
    <div style={{ display: "flex" }}>
      <div>
        <Playground code={jsxExample} />
      </div>
      <div>

      </div>
    </div>
  </Slide>
);
