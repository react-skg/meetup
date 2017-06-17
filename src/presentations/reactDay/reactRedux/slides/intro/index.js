import React from 'react';
import { BlockQuote, Quote, Link, Cite, Appear } from 'spectacle';

import { Slide, Header } from '../../components';

const notes = `
  - mutation and asynchronicity
`;

export default (
  <Slide id="intro" notes={notes}>
    <Header
      title="First things first"
    />
    <Appear>
      <div>
        <BlockQuote>
          <Quote>
            <Link
              href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"
              targe="_blank"
              textColor="white"
            >
              You might not need redux
            </Link>
          </Quote>
          <Cite textColor="white">Dan Abramov - The creator of Redux.js</Cite>
        </BlockQuote>
      </div>
    </Appear>
  </Slide>
);
