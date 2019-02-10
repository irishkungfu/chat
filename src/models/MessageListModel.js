import { observable, action, runInAction } from "mobx"


import MessageModel from "./MessageModel"

export default class MessageListModel {
    @observable messages = [];
    @observable chatInputHeight = 50
    @observable chatHeaderHeight = 50
    @observable newMessage = ""
    @observable receivedMessage = {}
    @observable awaitingMessage = "done"
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
    addMessage(messageBody, isSender, messageType) {
        this.messages.push(new MessageModel(messageBody, isSender, messageType))
    }
    @action
    clearMessage() {
        this.newMessage = "";
    }
    @action
    sendMessage(messageBody, messageType) {
        this.addMessage(messageBody, true, messageType)
        this.fetchNewMessage(Math.floor(Math.random() * 50) + 1)
        this.clearMessage()
    }
    /**
     * 
     * @param {object} data 
     * expected shape of data { messageBody: string, messageType: string}
     */
    @action
    receiveMessage(data) {
        // will contain logic for parsing responses, i.e. if component is type
        this.addMessage(data.messageBody, false, data.messageType)
        this.awaitingMessage = "done"
    }
    /**
     * sample async call
     * @param {int} id 
     */
    @action
    async fetchNewMessage(id) {
        this.receivedMessage = {}
        this.awaitingMessage = "pending"
        try {
            const res = await fetch(`http://localhost:3000/messages/${id}`)
            let data = await res.json();
            // after await, modifying state again, needs an actions:
            runInAction(() => {
                setTimeout(() => {
                    this.receiveMessage(data)
                }, 1000);
            })
        } catch (error) {
            runInAction(() => {
                console.log(error)
                this.awaitingMessage = "error"
            })
        }
    }
}