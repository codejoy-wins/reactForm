import React, { Component } from 'react';
import './App.css';
import hunter from './hunter.png';
import Xp from './components/Xp';
import Form from './components/Form';
// App Goal:
// To have a state, and a local data state with functions as props with proper data flow.  COMPLETED
// then forms changing state too
// component has local state tracking form
// then api
class App extends Component {
  state = {
    characters: [
      {
        "firstname": "John",
        "lastname": "Snow"
      }
    ],
    number: 117
  }
  modNum = (n)=> {
    n*=4;
    this.setState(
      {
        number:n
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Xp num={this.state.number} modifize={this.modNum}/>
        <Form />
        <header className="App-header">
          <img src={hunter} className="App-logo" alt="logo" />
          <p>
            
          </p>
          <a
            className="App-link"
            href="https://maxjann.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jann Software
          </a>
        </header>
      </div>
    );
  }
}

export default App;
