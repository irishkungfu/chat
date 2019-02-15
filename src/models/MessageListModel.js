
import { observable, action, flow } from "mobx"


import MessageModel from "./MessageModel"

export default class MessageListModel {

    @observable messages = [];
    @observable newMessage = ""
    @observable awaitingMessage = "done"
    @observable chatInputHeight = 50 // base value, calculated value will override
    @observable chatHeaderHeight = 50 // base value, calculated value will override

    /**
     * Gets the calculated height and sets required variable
     * @param {int} newHeight 
     * @param {string} element expects "header" or "input"
     */
    @action
    updateHeight(newHeight, element) {
        switch (element) {
            case "header":
                this.chatHeaderHeight = newHeight
                break
            case "input":
                this.chatInputHeight = newHeight
                break
            default:
                console.warn("No Argument added for element in updateHeight")
        }

    }
    /**
     * adds a message to state's message array
     * @param {string} messageBody 
     * @param {bool} isSender 
     * @param {string} messageType // text, component, list - default text
     */
    @action
    addMessage(messageBody, isSender = false, messageType = "text") {
        this.messages.push(new MessageModel(messageBody, isSender, messageType))
    }
    @action
    clearMessage() {
        this.newMessage = "";
    }

    @action
    sendMessage = flow(function* (messageBody, messageType) {
        this.addMessage(messageBody, true, messageType)
        this.clearMessage()
        try {
            const res = yield this.fetchNewMessage(Math.floor(Math.random() * 50) + 1)
            let data = yield res.json();
            return data
        } catch (error) {
            this.awaitingMessage = "error"
            return error
        }
    })
    /**
     * fetch messages async call
     * @param {int} id 
     */
    @action
    fetchNewMessage = flow(function* (id) {
        this.awaitingMessage = "pending"

        try {
            const res = yield fetch(`http://localhost:3000/messages/${id}`)
            let data = yield res.json();
            this.addMessage(data.messageBody, false, data.messageType)
            this.awaitingMessage = "done"
            return data
        } catch (error) {
            this.awaitingMessage = "error"
            return error
        }
    })
}