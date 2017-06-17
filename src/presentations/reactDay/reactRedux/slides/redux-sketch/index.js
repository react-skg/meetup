import React from 'react';
import { Heading, Text } from 'spectacle';
import { Slide } from '../../components';

import Sketch from './sketch.jsx';

const notes = `
    The root component creates the store, telling it what root reducer to use, using createStore()
    The root component wraps its subcomponents with the provider component 
    The Provider creates what’s basically a network to update the components.
    The smart components connect to network using connect()

    Flow:

    1. The view requests an action. The action creator formats it and returns it.
    2. The action is either dispatched automatically (if bindActionCreators() was used in setup), or the view dispatches the action.
    3. The store receives the action. It sends the current state tree and the action to the root reducer.
    4. The root reducer cuts apart the state tree into slices. Then it passes each slice to the subreducer that knows how to deal with it.
    5. The subreducer copies the slice and makes changes to the copy. It returns the copy of the slice to the root reducer.
    6. Once all of the subreducers have returned their slice copies, the root reducer pastes all of them together to form the whole updated state tree, which it returns to the store. The store replaces the old state tree with the new one.
    7. The store tells the view layer binding that there’s new state.
    8. The view layer binding asks the store to send over the new state.
    9. The view layer binding triggers a rerender.

`;

export default (
  <Slide
    id="redux-sketch"
    bgColor="primary"
    notes={notes}
  >
    <Sketch />
  </Slide>
);
