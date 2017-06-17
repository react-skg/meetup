import React from 'react';
import { Heading, List, ListItem, Image, Appear } from 'spectacle';
import { Slide } from '../../components';
import img from '../redux-sketch/provider.svg';

const notes = `

1. The Provider component: This is wrapped around the component tree. It makes it easy for the root component’s children to hook up to the store using connect().

2. connect(): This is a function provided by react-redux. If a component wants to get state updates, it wraps itself using connect(). Then the connect function will set up all the wiring for it, using the selector.

3. selector: This is a function that you write. It specifies what parts of the state a component needs as properties.
`;

export default (
  <Slide
    id="redux-provider"
    bgColor="primary"
    notes={notes}
  >
    <Image src={img} height="100px" />
    <Heading
      size={4}
      textColor="white"
    >
      (View Layer Binding) - The Provider
    </Heading>
    <List>
      <Appear>
        <ListItem>
          {'Connects (binds) the store with the view.'}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {'It is wrapped around the application component tree.'}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {'Provides children components with connect()'}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {'Children use connect() to dispatch actions and get the app state usually with'} <a href="https://github.com/reactjs/reselect" target="_blank">selectors</a>
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
