import { observable } from "mobx"
export default class MessageModel {
    id
    @observable messageBody
    isSender
    messageType
    /**
     * 
     * @param {string} messageBody 
     * @param {bool} isSender 
     * @param {string} messageType // text, component, list - default text
     */
    validateMessageType(type) {
        switch (type) {
            case "text":
                return "text"
            default:
                console.warn("Invalid messageType using 'text' as fallback");
                return "text"
        }
    }
    validateIsSender(value) {
        if (typeof value !== typeof true) {
            console.warn(value)
            console.warn("isSender is the wrong data type, defaulting to true")
            return true
        }
        return value

    }
    validateMessageBody(message) {
        if (typeof message === typeof "string") {
            return message
        }
        console.warn('invalid message type')
        return ("I'm sorry, but the message is not of type 'string'")
    }
    constructor(messageBody, isSender = false, messageType = "text", debugID) {
        this.id = debugID ? debugID : Math.random()
        this.messageBody = this.validateMessageBody(messageBody)
        this.isSender = this.validateIsSender(isSender)
        this.messageType = this.validateMessageType(messageType)
    }
}