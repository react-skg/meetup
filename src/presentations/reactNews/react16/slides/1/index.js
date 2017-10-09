import React from "react";
import { Heading, Slide, List, Appear } from "spectacle";

export default (
  <Slide
    transition={["slide"]}
    style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)', color: 'white'}}
  >
    <Heading size={3} style={{ color: 'white' }}>React 16 News</Heading>
    <List>
      <Appear><p>- Error Handing using Error Boundaries.</p></Appear>
      <Appear><p>- Render multiple elements without a wrapping element in a component.</p></Appear>
      <Appear><p>- Render text only components.</p></Appear>
      <Appear><p>- Render elements outside the current react tree using portals (ReactDOM.createPortal).</p></Appear>
      <Appear><p>- Define DOM attributes</p></Appear>
      <Appear><p>- Call setState with null to avoid triggering an update.</p></Appear>
    </List>
  </Slide>
);
