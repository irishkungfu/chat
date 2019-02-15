import React, { Component } from "react";
import styled from 'styled-components';
import { observer, inject } from "mobx-react";


const ChatHeaderWrapper = styled.div`
    border-bottom: 1px black solid;
    position: absolute;
    width: 100%;
    padding: 1rem;
    background: white;
    text-align: center;
`

@observer
class ChatHeader extends Component {

    componentDidMount() {
        this.props.store.updateHeight(this.headerWrapper.clientHeight, "header")
    }
    render() {
        return (
            <ChatHeaderWrapper
                ref={(headerWrapper) => this.headerWrapper = headerWrapper}
            >
                Chat Tron 2000
                </ChatHeaderWrapper>
        )
    }
}


export default ChatHeader