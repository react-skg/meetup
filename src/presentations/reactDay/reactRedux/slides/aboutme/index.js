import React from 'react';
import { Appear, Link } from 'spectacle';
import { Header, Slide } from '../../components';

export default (
  <Slide
    id="about"
  >
    <Header
      title="REDUX"
      subtitle="State Management with"
      withAnimations
      compact={false}
    />
    <br />
    <br />
    <Appear>
      <Link
        href="https://twitter.com/jamesgatzos"
        target="_blank"
      >
        @jamesgatzos
      </Link>
    </Appear>
  </Slide>
);
