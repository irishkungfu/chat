import React, { Component } from "react";
import styled from 'styled-components';

const ChatHeaderWrapper = styled.div`
    border-bottom: 1px black solid;
    position: absolute;
    width: 100%;
    padding: 1rem;
    background: white;
    text-align: center;
`

class ChatHeader extends Component {

    componentDidMount() {
        this.props.store.updateHeight(this.ChatHeaderWrapper.clientHeight, "input")

        // this.props.store.updateChatHeaderHeight(this.ChatHeaderWrapper.clientHeight)
    }
    render() {
        return (
            <ChatHeaderWrapper
                ref={(ChatHeaderWrapper) => this.ChatHeaderWrapper = ChatHeaderWrapper}
            >
                Chat Tron 2000
                </ChatHeaderWrapper>
        )
    }
}


export default ChatHeader