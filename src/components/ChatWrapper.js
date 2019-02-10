import React, { Component } from "react"
import { action } from "mobx";
import { observer } from "mobx-react";

import ChatInput from "./ChatInput.js"
import MessageList from "./MessageList";
import ChatHeader from "./ChatHeader"
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 500px;
    width: 300px;
    background: white;
    border: 1px black solid;
    position: relative;
`

@observer
class ChatWrapper extends Component {
    componentDidMount() {
        // send initial message
        this.props.store.addMessage("Hello.", false, "text")
    }
    render() {
        return (
            <Wrapper>
                <ChatHeader store={this.props.store} />
                <ChatInput store={this.props.store} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                <MessageList store={this.props.store} />
            </Wrapper>
        )
    }

    @action
    handleInputChange = e => {
        this.props.store.newMessage = e.target.value;
    }
    @action
    handleFormSubmit = e => {
        this.props.store.sendMessage(this.props.store.newMessage, "text")
        e.preventDefault();
    }
}

export default ChatWrapper