import React, { Component } from "react"
import { observer } from "mobx-react";
import { observable } from "mobx";

const padding = 1
const chatInputWrapper = {
    padding: `${padding}rem`,
    position: "absolute",
    borderTop: "1px black solid",
    bottom: 0,
    width: "100%",
    left: 0,
}

const chatInput = {
    border: "black solid 1px",
    padding: ".5rem",
    flexGrow: 1,
}
const chatButton = {
    border: "1px black solid",
    padding: ".5rem",
}
@observer
class ChatInput extends Component {
    componentDidMount() {
        this.props.store.updateChatInputHeight(this.divElement.clientHeight)
        this.nameInput.focus();
    }

    render() {
        return (

            <div
                style={chatInputWrapper}
                ref={(divElement) => this.divElement = divElement}
            >
                <form style={{ display: "flex" }} className="">

                    <input
                        type="text"
                        value={this.props.store.newMessage}
                        onChange={this.props.handleInputChange}
                        style={chatInput}
                        ref={(input) => { this.nameInput = input; }}
                    />
                    <button disabled={!this.props.store.newMessage} style={chatButton} onClick={this.props.handleFormSubmit} type="submit">Send</button>
                </form>
            </div>
        )

    }
}

export default ChatInput