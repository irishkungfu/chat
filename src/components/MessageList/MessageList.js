import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import styled from 'styled-components';
import Message from "../Message/Message"
import { array, shape } from 'prop-types'



const MessageListWrapper = inject('store')(
    observer(
        styled.ul`
            height: calc(100% - ${({ store: { chatInputHeight } }) => chatInputHeight + "px"});
            margin: 0;
            display: flex;
            flex-flow: column nowrap;
            overflow-y: auto;
            padding: 1rem;
            padding-top: ${({ store: { chatHeaderHeight } }) => chatHeaderHeight + "px"};
        `
    )
)

@observer
class MessageList extends Component {
    static propTypes = {
        store: shape({
            messages: array,
        }),
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    render() {
        const {
            store,
            messages = store.messages
        } = this.props
        return (
            <MessageListWrapper>
                {messages.map((message, index) => (
                    <Message store={store} message={message} key={message.id} order={index} />
                ))}
                {this.props.store.awaitingMessage === "pending" ?
                    <div>
                        <img
                            style={{ width: "40px", height: "40px" }}
                            src="/images/chatloader.svg"
                            alt=""
                        />
                    </div>
                    : null
                }
                <li
                    style={{ float: "left", clear: "both", visibility: "hidden", height: "2px" }}
                    ref={el => {
                        this.messagesEnd = el;
                    }}
                />
            </MessageListWrapper>
        )
    }
}

export default MessageList