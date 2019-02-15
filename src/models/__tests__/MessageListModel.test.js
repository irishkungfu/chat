import MessageListModel from '../MessageListModel';
import { configureAdapter } from "../../setupTests"

configureAdapter()

describe('MessageListModel', () => {
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
    describe('fetchNewMessage', () => {
        it('works with async/await and resolves', async () => {
            const store = new MessageListModel()
            expect.assertions(3);
            const fetchMessage = await store.fetchNewMessage(1);
            expect(typeof fetchMessage).toBe("object")
            expect(store.messages.length).toBe(1)
            expect(store.awaitingMessage).toBe("done")
        });
    });
    describe('SendMessage', () => {
        it("invokes addMessage(), fetchNewMessage(), and clearMessage", async () => {
            const store = new MessageListModel()
            await store.sendMessage("I'm a Test", "text")
            expect(store.messages[0].messageBody).toBe("I'm a Test")
            expect(store.newMessage).toBe("")
            expect(store.messages.length).toBe(2) // placeholder for async call fetchNewMessage(), will fail until fetchNewMessage works
        })
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
    });
});