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

const images = {
  pavlos: require("../../../../assets/pavlos.jpg"),
  dimitris: require("../../../../assets/dimitris.png"),
  nikos: require("../../../../assets/nikos.jpg"),
  xristina: require("../../../../assets/xristina.jpg"),
  lefteris: require("../../../../assets/lefteris.jpg"),
  sartios: require("../../../../assets/sartios.jpg"),
  jamal: require("../../../../assets/jamal.jpg"),
  background: require("../../../../assets/background.png"),
  logo: require("../../../../assets/logo.png")
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
        style={{ backgroundImage: `url(${images['background']})` }}
        className="meetup-speakers-wrapper"
      >
        <div className="meetup-speakers-container">
          <div className="meetup-speakes-logo-container">
            <img className="meetup-speakes-logo-image" style={{ paddingTop: '33px' }} width="400" alt="logo" src={images['logo']}/>
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
                            <img className="meetup-speakers-account-logo-image" alt="sartios" src={images['sartios']}></img>
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
                            <img className="meetup-speakers-account-logo-image" alt="xristina" src={images['xristina']}></img>
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
                            <img className="meetup-speakers-account-logo-image" alt="nikos" src={images['nikos']}></img>
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
                            <img className="meetup-speakers-account-logo-image" alt="dimitris" src={images['dimitris']}></img>
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
                            <img className="meetup-speakers-account-logo-image" alt="lefteris" src={images['lefteris']}></img>
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
                            <img className="meetup-speakers-account-logo-image" alt="pavlos" src={images['pavlos']}></img>
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
                            <img className="meetup-speakers-account-logo-image" alt="jamal" src={images['jamal']}></img>
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
