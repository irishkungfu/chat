import React from "react";
import styled from 'styled-components';
import { observer } from "mobx-react";
import { number, shape, string, bool } from 'prop-types'




const MessageStyles = styled.li`
    border: 1px solid black;
    padding: 1rem;
    list-style-type: none;
    margin-top: 1rem;
    max-width: 80%;
    word-wrap: break-word;
`
const isSenderClass = {
    alignSelf: "flex-end",
    background: "red"
}

const isNotSenderClass = {
    alignSelf: "flex-start"
}

const Message = observer(({ message, order }) => (
    <MessageStyles style={
        Object.assign(
            {},
            message.isSender ? isSenderClass : isNotSenderClass,
            !order && { marginTop: "auto" }
        )
    }
    >
        {message.messageBody}
    </MessageStyles >
));

Message.propTypes = {
    message: shape({
        messageBody: string,
        isSender: bool,
        messageType: string
    }),
    order: number
}

export default Message;
