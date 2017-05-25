import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './speakers.css';

const routes = {
  sartios: '/intro',
  xristina: '/state-management',
  nikos: '/react-native',
  dimitris: '/react-redux',
  lefteris: '/react-router',
  pavlos: '/styled-components',
  jamal: '/server-side-rendering'
};

export default class Speakers extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      speaker: 'sartios'
    };
  }

  handleChangeSpeaker = (speaker) => {
    this.setState({ speaker });
  }

  render() {
    return (
      <div
        style={{ backgroundImage: "url('https://static1.squarespace.com/static/552078ebe4b0f9cd71b5cc47/56c2165eb6aa60cc01341ef7/56c216edab48dedeadbc9d92/1461594148194/?format=1500w')" }}
        className="meetup-speakers-wrapper"
      >
        <div className="meetup-speakers-container">
          <div className="meetup-speakes-logo-container">
            <img className="meetup-speakes-logo-image" alt="logo" src="//react.friends.com.gr/wp-content/uploads/2017/05/logo-black.png"/>
          </div>
          <div className="meetup-speakers-splash">
            <div className="meetup-speakers-top">
              <div className="meetup-speakers-datetime-container">
                <div className="meetup-speakers-datetime">
                  <div className="meetup-speakers-datetime-time">11:00 AM</div>
                <div className="meetup-speakers-datetime-date">Saturday, June 17th, 2017</div>
                </div>
              </div>
              <div className="meetup-speakers-accounts-wrapper">
                <div className="meetup-speakers-accounts-container">
                  <div className="meetup-speakers-accounts">
                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'sartios' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("sartios"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'sartios' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="sartios" src="https://i1.wp.com/react.friends.com.gr/wp-content/uploads/2017/05/14657394_1195907620448125_1177239296511325467_n.jpg"></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Sartios</div>
                      </div>
                    </div>
                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'xristina' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("xristina"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'xristina' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="xristina" src="https://i0.wp.com/react.friends.com.gr/wp-content/uploads/2017/05/13220998_10208354938447781_1300075455891503164_n.jpg"></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Xristina</div>
                      </div>
                    </div>
                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'nikos' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("nikos"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'nikos' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="nikos" src="https://i2.wp.com/react.friends.com.gr/wp-content/uploads/2017/05/15230811_10154132483616724_6003806463355837262_n.jpg"></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Nikos</div>
                      </div>
                    </div>
                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'dimitris' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("dimitris"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'dimitris' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="dimitris" src="https://i2.wp.com/react.friends.com.gr/wp-content/uploads/2017/05/index.png"></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Dimitris</div>
                      </div>
                    </div>
                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'lefteris' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("lefteris"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'lefteris' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="lefteris" src="https://avatars0.githubusercontent.com/u/11925511?v=3&s=400"></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Lefterhs</div>
                      </div>
                    </div>
                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'pavlos' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("pavlos"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'pavlos' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="pavlos" src="https://i2.wp.com/react.friends.com.gr/wp-content/uploads/2017/05/13590372_312140005792923_6570737500964967865_n.jpg"></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Pavlos</div>
                      </div>
                    </div>
                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'jamal' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("jamal"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'jamal' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="jamal" src="https://digitalmarketing.blob.core.windows.net/8981/images/items/image379833.jpg"></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Jamal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="meetup-speakers-divider"/>
          <div className="meetup-speakers-actions">
            <Link to={routes[this.state.speaker]}>
              <button className="meetup-speakers-actions-button">
                {`Show ${this.state.speaker} Presentation`}
              </button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
