import React, { Component } from "react"
import { action } from "mobx";
import { observer } from "mobx-react";
import styled from 'styled-components';
import { func, shape, string } from 'prop-types'


import ChatInput from "../ChatInput/ChatInput"
import MessageList from "../MessageList/MessageList";
import ChatHeader from "../ChatHeader/ChatHeader"


const Wrapper = styled.div`
    height: 500px;
    width: 300px;
    background: white;
    border: 1px black solid;
    position: relative;
`


@observer
class ChatWrapper extends Component {
    static propTypes = {
        store: shape({
            addMessage: func,
            sendMessage: func,
            newMessage: string,
        }).isRequired,
    }
    componentDidMount() {
        // send initial message
        this.props.store.addMessage("Hello.", false, "text")
    }
    render() {
        const {
            store
        } = this.props
        return (
            <Wrapper>
                <ChatHeader store={store} />
                <ChatInput store={store} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                <MessageList store={store} />
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