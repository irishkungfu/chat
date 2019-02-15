import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "mobx-react"
import TimerModel from "./models/TimerModel"

const store = new TimerModel()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

        </div>
      </Provider>

    );
  }
}

export default App;
