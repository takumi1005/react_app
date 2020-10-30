import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';
import { buildQueries } from '@testing-library/react';

let theme = {
  light: {
    backgroundColor: "#eef",
    color: "#006",
    padding: "10px"
  },
  dark: {
    backgroundColor: "#006",
    color: "#eef",
    padding: "10px"
  }
}

const ThemeContext = React.createContext(theme.dark);

class App extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div style={this.context}>
        <Title value="Content page" />
        <Message value="this is content sample." />
        <Message value="これはサンプルテーマです" />
      </div>
    )
  }
}

class Title extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <h2 style={this.context}>{this.props.value}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <p style={this.context}>{this.props.value}</p>
      </div>
    )
  }
}

export default App;
