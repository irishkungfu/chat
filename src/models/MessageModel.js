import { observable } from "mobx"
export default class MessageModel {
    id = Math.random()
    @observable messageBody
    isSender
    messageType
    /**
     * 
     * @param {string} messageBody 
     * @param {bool} isSender 
     * @param {string} messageType // text, component, list - default text
     */
    constructor(messageBody, isSender, messageType) {
        this.messageBody = messageBody
        this.isSender = isSender || false
        this.messageType = messageType || "text"
    }
}