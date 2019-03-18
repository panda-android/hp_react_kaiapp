import React, { Component } from 'react';
import logo from './logo.svg';
import './app.scss';
import 'l10n';
import { SoftKey } from 'kaid';
import Panel from '../panel';

class App extends Component {
  componentDidMount() {
    // Focus to the anchor, press 'Enter' should open a new webpage
    this.anchor && this.anchor.focus();
  }

  handleUserInput = (key) => {
    // alert("key = "+key);
    this.setState(prevState => (reducer(prevState, key)));
  };
        // <Panel onUserInput={this.handleUserInput} />

  render() {
    return (
      <>
        <SoftKey left="clear" right="clear-all" />
      </>
    );
  }
}

export default App;
