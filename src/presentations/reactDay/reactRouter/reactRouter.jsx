import React, { Component } from 'react';
import CodeSlide from 'spectacle-code-slide';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { simpleRouterCode, playGroundCode } from './assets';
import routerImage from '../../../assets/react-router/simpleRouter.PNG';

import { Deck, Slide, Appear, List, ListItem, Heading, ComponentPlayground } from 'spectacle';

import { theme } from '../common/themes/darkTheme';
import './reactRouter.post.css';

const style = {
  position: 'fixed',
  bottom: '20px',
  width: '100%',
  padding: '20px',
  fontFamily: 'monospace',
  textAlign: 'left',
};

export default class ReactRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }

  render() {
    return (
      <Deck theme={theme} transition="slide" progress="pacman">
        <Slide transition={['fade']} bgColor="primary">
          <Heading><code>react-router</code> v4</Heading>
          <List ordered>
            <Appear><ListItem>What is it. (Do I need it?)</ListItem></Appear>
            <Appear><ListItem>How we can use it.</ListItem></Appear>
            <Appear>
              <ListItem>
                How to combine all the different types of components
                that we can use for declaring routes.
              </ListItem>
            </Appear>
            <Appear><ListItem>Route auth, prompts and redirects.</ListItem></Appear>
            <Appear><ListItem>Live examples.</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading textColor="#000" textSize="55px">
            <code>react-router</code> / What is it and what it can achieve?
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="35px">
                Industry standard for client side routing with React.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                Its API changed in every major version, but in v4
                it makes sense because it follows the React {'component\'s'} lifecycle.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                We can achieve selective rendering of components by
                matching the path of each route.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                Restrict parts of our application and redirect
                unauthorized users.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                Prompt users when the route will change in order for them not to lose unsaved data.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                  Code splitting. Incrementally
                  download parts of our app, according to route matching.
                  (<code>webpack</code> / <code>bundle-loader</code> or alternative)
                </ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          style={style}
          transition={[]}
          lang="js"
          code={simpleRouterCode}
          ranges={[
            { loc: [0, 1], note: 'Import the components that your routes will lead to.' },
            { loc: [2, 6], note: 'Importing the <Router/> and <Route/> components' },
            { loc: [9, 23],
              image: routerImage,
              note: 'Each route will create an element. Notice the exact prop, \
              because we don\'t want <Speakers /> to be rendered in every route.' },
          ]}
        />
        <Slide>
          <Heading textColor="#000" textSize="55px">
            <code>react-router</code> / Components
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="35px">
                <code>{`<Route/>`}</code> - Main component that renders through its 'component', 'render' or 'children' prop.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                <code>{`<Switch/>`}</code> - Renders the first route with matching pathname (only one!).
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                <code>{`<Link/>`}</code> - Self explanatory component which when clicked redirects to its specified 'to' (object or string) prop.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                <code>{`<NavLink/>`}</code> - Same but also has props of 'activeClassName' and 'activeStyle' to style the links if their path has matched.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                <code>{`<Prompt/>`}</code> - Prompt component to get user confirmation.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                <code>{`<Redirect/>`}</code> - Return the Redirect component inside your own or in route level.
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading textColor="#000" textSize="55px">
            <code>react-router</code> / Props and HoCs
          </Heading>
          <List>
            <Appear>
              <ListItem textSize="35px">
                When a route matches, it injects to the rendered component 3 props: <code>match, history, location</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                <code>match</code> - Contains all the information about the matched path. Path, url, any wildcard params and the isExact flag.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                <code>history</code> - Length, last action performed and most importantly functions that allow us to programmatically
                redirect to another path, go back and forth in the history stack or replace entries.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                <code>location</code> - Information about where you are currently at. Pathname, search terms and the hash url fragment (if any).
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="35px">
                <code>withRouter</code> - Export any component under the router's context with it to inject all the above props to it e.g. <code>export withRouter(MyAwesomeComponent)</code>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['zoom']}>
          <div id="react-router-playground">
            <ComponentPlayground
              theme="dark"
              code={playGroundCode}
              scope={{
                Router,
                Route,
                Switch,
                Redirect
              }}
            />
          </div>
        </Slide>
        <Slide>
          <Heading textColor="#000" textSize="55px">
            <code>react-router</code> / Any questions?
          </Heading>
          <br />
          Thank you for your attention.
        </Slide>
      </Deck>
    );
  }
}
