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
  constructor(props){
    super(props);
    this.state = {
      authorized: false
    };
  }

  handleAuthorization = () => {
    this.setState({ authorized: !this.state.authorized });
  };

  renderLogin = () => (
    <div>
      You have to login first!
      <div
        onClick={this.handleAuthorization}
        style={{
          width: 150,
          height: 40,
          background: 'pink',
          cursor: 'pointer'
        }}
      >
        Login
      </div>
      <hr />
    </div>
  );

  renderProtected = () => (
    <div
      style={{ color: 'red' }}
    >
      Some protected content
      <div
        onClick={this.handleAuthorization}
        style={{
          width: 150,
          height: 40,
          background: 'grey',
          cursor: 'pointer',
          color: 'white'
        }}
      >
        Logout
      </div>
      <hr />
    </div>
  );

  renderBase = (props) => (
    <div>
      <b>I am always rendering because my path is the base url!</b>
      <p>match: {JSON.stringify(props.match)}</p>
      <p>history: {JSON.stringify(props.history)}</p>
      <p>location: {JSON.stringify(props.location)}</p>
      <hr />
    </div>
  );

  renderAlwaysMatching = (props) => (
    <div style={{ color: 'darkblue' }}>
      <b>I 'm always here no matter what but if my path does not match, my match prop is <code>null</code>.</b>
      <p>{JSON.stringify(props)}</p>
    </div>
  )

  render() {
    return (
      <Router>
        <div style={{ height: 600, overflowY: 'auto' }}>
          <Route
            path="/"
            component={this.renderBase}
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
          <Route
            path="/:slug/protected"
            render={() => this.state.authorized
              ? this.renderProtected()
              : this.renderLogin()
            }
          />
          <Route
            path='/:slug/some/path'
            children={this.renderAlwaysMatching}
          />
        </div>
      </Router>
    );
  }
}
render(<RouterLiveExample />, mountNode);
`;


export default { simpleRouterCode, playGroundCode };
