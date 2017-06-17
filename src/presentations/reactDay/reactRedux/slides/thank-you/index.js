import React from 'react';
import { Heading, Text, Layout } from 'spectacle';
import { Slide, Icon } from '../../components';

const notes = `
    Three Principles
        Single source of truth
            The state of your whole application is stored in an object tree within a single store.
        State is read-only
            The only way to change the state is to emit an action, an object describing what happened.
        Changes are made with pure functions
            To specify how the state tree is transformed by actions, you write pure reducers.
`;

export default (
  <Slide
    id="end"
    notes={notes}
  >
    <Heading
      size={4}
      textColor="white"
    >
      Thank You
    </Heading>
    <Layout style={{ alignItems: 'center' }}>
      <Icon name="github" />
      <Text textAlign="right">jamesgatzos</Text>
    </Layout>
    <Layout style={{ alignItems: 'center' }}>
      <Icon name="twitter" />
      <Text>jamesgatzos</Text>
    </Layout>
  </Slide>
);
