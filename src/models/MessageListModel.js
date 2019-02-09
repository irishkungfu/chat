import { observable, action } from "mobx"

import MessageModel from "./MessageModel"

export default class MessageListModel {
    @observable messages = [];
    @observable chatInputHeight = 50
    @observable chatHeaderHeight = 50
    @observable newMessage = ""
    /**
     * 
     * @param {string} messageBody 
     * @param {bool} isSender 
     */
    @action
    updateChatInputHeight(newHeight) {
        this.chatInputHeight = newHeight
    }
    @action
    updateChatHeaderHeight(newHeight) {
        this.chatHeaderHeight = newHeight
    }
    @action
    addMessage(messageBody, isSender) {
        this.messages.push(new MessageModel(messageBody, isSender))
    }
    @action
    responseFaker = e => {
        this.addMessage(this.newMessage ? this.newMessage : "Anim deserunt et anim amet minim ex cillum sit laborum exercitation. Minim aliqua culpa cillum esse sint sint eu nostrud minim est cillum. Occaecat officia consectetur in qui labore non nostrud quis id sit non anim.", false)
        this.newMessage = "";
        e.preventDefault();
    }
}