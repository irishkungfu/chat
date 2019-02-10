import React, { Component } from "react"
import styled from 'styled-components';
import { observer } from "mobx-react";


const padding = 1

const ChatInputWrapper = styled.div`
    padding: ${padding}rem
    position: absolute;
    border-top: 1px black solid;
    bottom: 0;
    width: 100%;
    left: 0;
`

const Input = styled.input`
    border: black solid 1px;
    padding: .5rem;
    flex-grow: 1;

    :focus {
        outline: none
    }
    `

const ChatButton = styled.button`
    border: 1px black solid;
    padding: .5rem;

    :hover {
        cursor: pointer;
    }
    :focus {
        outline: none
        color: red
    }
    `
@observer
class ChatInput extends Component {
    componentDidMount() {
        // this.props.store.updateChatInputHeight(this.divElement.clientHeight)
        this.props.store.updateHeight(this.divElement.clientHeight, "input")
        this.nameInput.focus();
    }

    render() {
        return (
            <ChatInputWrapper
                ref={(divElement) => this.divElement = divElement}
            >
                <form style={{ display: "flex" }} className="">
                    <Input
                        type="text"
                        value={this.props.store.newMessage}
                        onChange={this.props.handleInputChange}
                        ref={(input) => { this.nameInput = input; }}
                    />
                    <ChatButton disabled={!this.props.store.newMessage} onClick={this.props.handleFormSubmit} type="submit">Send</ChatButton>
                </form>
            </ChatInputWrapper>
        )
    }
}

export default ChatInput