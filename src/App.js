import React, { Component } from 'react';
import Header from './Components/Header';
import Provider from './Components/Provider';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div>
          <Provider />
        </div>
      </div>
    );
  }
}