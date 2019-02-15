import MessageModel from '../MessageModel';
import { configureAdapter } from "../../setupTests"

configureAdapter()

describe('MessageModel', () => {
    describe('ValidateMessageType', () => {
        it("messageType is one of the available sets", () => {
            const message = new MessageModel("Test Message", true, "bob")
            expect(message.messageType).toBe("text")

            const anotherMessage = new MessageModel("Test Message", true, "text")
            expect(anotherMessage.messageType).toBe("text")
        })
    });
    describe('validateIsSender', () => {
        it("messageType is one of the available sets", () => {
            const message1 = new MessageModel("Test Message", true, "text")
            expect(message1.isSender).toBe(true)

            const message2 = new MessageModel("Test Message", false, "text")
            expect(message2.isSender).toBe(false)

            const message3 = new MessageModel("Test Message", "hamburger", "text")
            expect(message3.isSender).toBe(true)

            const message4 = new MessageModel("Test Message", null, "text")
            expect(message4.isSender).toBe(true)

            const message5 = new MessageModel("Test Message", undefined, "text")
            expect(message5.isSender).toBe(false)
        })
    });
    describe('messageBody', () => {
        it("is a string", () => {
            const message1 = new MessageModel("Test Message", true, "text")
            expect(typeof message1.messageBody).toBe("string")
        })
        it("returns a message indicating if it receives a parameter other than a string", () => {
            const message1 = new MessageModel(["arr1", "arr2"], true, "text")
            expect(message1.messageBody).toBe("I'm sorry, but the message is not of type 'string'")
        })
    });
});