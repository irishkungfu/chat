import React, { Component } from 'react';
import './App.css';
import MessageListModel from "./models/MessageListModel"
import ChatWrapper from './components/ChatWrapper';
import { Provider } from "mobx-react"

const store = new MessageListModel()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <ChatWrapper store={store} />
        </Provider>
      </div>
    );
  }
}

export default App;
