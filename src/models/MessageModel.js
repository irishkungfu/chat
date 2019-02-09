import { observable } from "mobx"
export default class MessageModel {
    id = Math.random()
    @observable messageBody
    isSender = true // used to indicate if the person the UI is showing to is the isSender of the message

    constructor(messageBody, isSender) {
        this.messageBody = messageBody
        this.isSender = isSender || false
    }
}