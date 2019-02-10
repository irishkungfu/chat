import React from "react";
import styled from 'styled-components';
import { observer } from "mobx-react";

const MessageStyles = styled.li`
    border: 1px solid black;
    padding: 1rem;
    list-style-type: none;
    margin-top: 1rem;
    max-width: 80%;
    word-wrap: break-word;
`
const isSender = {
    alignSelf: "flex-end",
}
const isNotSender = {
    alignSelf: "flex-start"
}

const Todo = observer(({ message, order }) => (
    <MessageStyles style={
        Object.assign(
            {},
            message.isSender ? isSender : isNotSender,
            order === 0 ? { marginTop: "auto" } : {}
        )
    }
    >
        {message.messageBody}
    </MessageStyles >
));

export default Todo;
