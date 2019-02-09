import React from "react";
import { observer } from "mobx-react";

const messageStyles = {
    border: "1px solid black",
    padding: "1rem",
    listStyleType: "none",
    marginTop: "1rem",
    maxWidth: "80%",

}
const isSender = {
    alignSelf: "flex-end",
}
const isNotSender = {
    alignSelf: "flex-start"
}


const Todo = observer(({ message, order }) => (
    <li style={
        Object.assign(
            {},
            messageStyles,
            message.isSender ? isSender : isNotSender,
            order === 0 ? { marginTop: "auto" } : {}
        )
    }
    >
        {message.messageBody}
    </li >
));

export default Todo;
