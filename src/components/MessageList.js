import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import Message from "./Message"

const messageListWrapper = {
    height: "calc(100% - 50px)",
    margin: 0,
    display: "flex",
    flexFlow: "column nowrap",
    overflowY: "auto",
    padding: "1rem",
}
@observer
class MessageList extends Component {

    componentDidUpdate() {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };
    @observable newMessage = "";

    render() {
        return (
            <React.Fragment>
                <ul style={Object.assign({}, messageListWrapper, { paddingTop: this.props.store.chatHeaderHeight }, { height: `calc(100% - ${this.props.store.chatInputHeight}px)` })}>
                    {this.props.store.messages.map((message, index) => (
                        <Message store={this.props.store} message={message} key={message.id} order={index} />
                    ))}
                    <li
                        style={{ float: "left", clear: "both", visibility: "hidden", height: "2px" }}
                        ref={el => {
                            this.messagesEnd = el;
                        }}
                    />

                </ul>
            </React.Fragment>

        )
    }
}

export default MessageList