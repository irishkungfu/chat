import MessageListModel from '../MessageListModel';
import { configureAdapter } from "../../setupTests"

configureAdapter()

describe('MessageListModel', () => {
    it("adds messages when AddMessage() is called", () => {
        const store = new MessageListModel()
        store.addMessage("Test Message 1")
        store.addMessage("Test Message 2")
        expect(store.messages.length).toBe(2)
        expect(store.messages[0].messageBody).toBe("Test Message 1")
        expect(store.messages[1].messageBody).toBe("Test Message 2")
    })
    it("updates height when updateHeight() is called", () => {
        const store = new MessageListModel()
        store.updateHeight(100, "header")
        expect(store.chatHeaderHeight).toBe(100)
        store.updateHeight(33, "input")
        expect(store.chatInputHeight).toBe(33)
    })
    it("clears newMessage when clearMessage() is called", () => {
        const store = new MessageListModel()
        store.clearMessage()
        expect(store.newMessage).toBe("")
    })
    it("invokes addMessage(), fetchNewMessage(), and clearMessage,  when sendMessage() is invoked", () => {
        const store = new MessageListModel()
        store.sendMessage("I'm a Test", "text")
        expect(store.messages[0].messageBody).toBe("I'm a Test")
        expect(store.newMessage).toBe("")
        expect(store.messages.length).toBe(2) // placeholder for async call fetchNewMessage(), will fail until fetchNewMessage works
    })
    it("adds a message and updates awaitingMessage when object data is passed", () => {
        const store = new MessageListModel()
        store.receiveMessage({ messageBody: "Hello I'm a test", messageType: "text" })
        expect(store.messages[0].messageBody).toBe("Hello I'm a test")
        expect(store.awaitingMessage).toBe("done")
    })
    it("adds a message and updates awaitingMessage when object data is passed", () => {
        const store = new MessageListModel()
        store.receiveMessage({ messageBody: "Hello I'm a test", messageType: "text" })
        expect(store.messages[0].messageBody).toBe("Hello I'm a test")
        expect(store.awaitingMessage).toBe("done")
    })
    it('works with async/await and resolves', async () => {
        const store = new MessageListModel()
        expect.assertions(1);
        await store.fetchNewMessage(0);
        expect(store.messages.length).toBe(1)

        // expect.assertions(1);
        // try {
        //     await store.fetchNewMessage(0);
        // } catch (e) {
        //     expect(e).toMatch('error');
        // }

    });

});

describe('AddMessage', () => {
    it("adds messages when AddMessage() is called", () => {
        const store = new MessageListModel()
        store.addMessage("Test Message 1")
        store.addMessage("Test Message 2")
        expect(store.messages.length).toBe(2)
        expect(store.messages[0].messageBody).toBe("Test Message 1")
        expect(store.messages[1].messageBody).toBe("Test Message 2")
    })
    it("should return an error if a parameter is not valid", () => {
        const store = new MessageListModel()
        const sharedInvalid = [["hello"], { hello: "testing" }, null, undefined, '']
        const invalidMessages = [...sharedInvalid]
        const invalidMessageType = [...sharedInvalid]
        const invalidisSender = ["hello", ...sharedInvalid]

        function checkValidity(messageBody = "test message", isSender = true, messageType = "text") {
            expect(() => {
                store.addMessage(messageBody, isSender, messageType);
            }).toThrow("Parameter isSender is an invalid type");
        }
        // expect(() => {
        //     store.addMessage("hello", false, "text");
        // }).toThrow("Parameter isSender is an invalid type");

        // invalidMessages.map(invalidParam => checkValidity(invalidParam))
        // invalidMessageType.map(invalidParam => checkValidity(invalidParam))
        // invalidisSender.map(invalidParam => checkValidity("test message", invalidParam, "text"))

    })
});