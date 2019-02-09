import React, { Component } from 'react';
import './App.css';
import MessageListModel from "./models/MessageListModel"
import ChatWrapper from './components/ChatWrapper';

const store = new MessageListModel()

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MessageList store={store} /> */}
        <ChatWrapper store={store} />
      </div>
    );
  }
}

export default App;
