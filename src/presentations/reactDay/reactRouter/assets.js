export const simpleRouterCode = `// Component imports

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class Presentation extends Component {
  render() {













  }







}`;


export const playGroundCode = `
class RouterLiveExample extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ overflowY: 'auto', height: 600 }}>
          <Route
            path="/"
            render={(props) =>
              <div>
                <p>match: {JSON.stringify(props.match)}</p>
                <p>history: {JSON.stringify(props.history)}</p>
                <p>location: {JSON.stringify(props.location)}</p>
                <hr />
              </div>
            }
          />
          <Route
            path="/:slug/awesome"
            render={(props) =>
              <div style={{ color: 'blueviolet' }}>
                THIS AWESOME COMPONENT MATCHED
                <p>match: {JSON.stringify(props.match)}</p>
                <p>history: {JSON.stringify(props.history)}</p>
                <p>location: {JSON.stringify(props.location)}</p>
                <hr />
              </div>
            }
          />
        </div>
      </Router>
    );
  }
}
render(<RouterLiveExample />, mountNode);
`;


export default { simpleRouterCode, playGroundCode };
