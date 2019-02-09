import React, { Component } from "react"
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import ChatInput from "./ChatInput.js"
import MessageList from "./MessageList";
import ChatHeader from "./ChatHeader"

const chatWrapper = {
    height: "500px",
    width: "300px",
    background: "white",
    border: "1px black solid",
    position: "relative",
}

@observer
class ChatWrapper extends Component {
    componentDidMount() {
        // use to send a test message
        this.props.store.addMessage("Received Message", false)
        // this.props.store.addMessage("Sent Message", true)
        // this.props.store.addMessage("Received Message", false)
        // this.props.store.addMessage("Sent Message", true)
        // this.props.store.addMessage("Received Message", false)
        // this.props.store.addMessage("Sent Message. Super long test to see what happens with sizing, etc what are the other things it can mess up", true)
        // this.props.store.addMessage("Received Message", false)
        // this.props.store.addMessage("Sent Message", true)
        // setInterval(() => {
        //     this.props.store.addMessage("Received Message", false)

        // }, 1000);
        // setInterval(() => {
        //     this.props.store.addMessage("Sent Message", true)

        // }, 2001);

    }

    // @observable newMessage = "";
    render() {
        return (
            <React.Fragment>
                <button onClick={this.props.store.responseFaker} style={{ marginBottom: "1rem" }}>Generate Response</button>
                <div style={chatWrapper}>
                    {/* Messages */}
                    <ChatHeader store={this.props.store} />
                    <ChatInput store={this.props.store} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                    <MessageList store={this.props.store} />
                </div>
            </React.Fragment>

        )

    }

    @action
    handleInputChange = e => {
        this.props.store.newMessage = e.target.value;
    }
    @action
    handleFormSubmit = e => {
        // this.props.store.newMessage ? 
        this.props.store.addMessage(this.props.store.newMessage, true)
        this.props.store.newMessage = "";
        e.preventDefault();
    }
}

export default ChatWrapper