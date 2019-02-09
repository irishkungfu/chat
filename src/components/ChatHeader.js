import React, { Component } from "react";

const chatHeaderWrapper = {
    borderBottom: "1px black solid",
    position: "absolute",
    width: "100%",
    padding: "1rem",
    background: "white",
    textAlign: "center",
}

class ChatHeader extends Component {
    componentDidMount() {
        this.props.store.updateChatHeaderHeight(this.chatHeaderWrapper.clientHeight)
        console.log(this.props.store.chatHeaderHeight)

    }
    render() {
        return (
            <div
                ref={(chatHeaderWrapper) => this.chatHeaderWrapper = chatHeaderWrapper}
                style={chatHeaderWrapper}
            >
                Chat Tron 2000
                </div>
        )
    }
}


export default ChatHeader