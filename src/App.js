import React, { Component } from 'react';
import './App.css';
import MessageListModel from "./models/MessageListModel"

import ChatWrapper from './components/ChatWrapper/ChatWrapper';
import { Provider } from "mobx-react"
import styled, { ThemeProvider } from "styled-components"

// TODO Move to Own File

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};

const store = new MessageListModel()


class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <ChatWrapper store={store} />
          </Provider>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
