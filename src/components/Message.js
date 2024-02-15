// This component is used to display the message in the chat window. It also has a delete button to delete the message.

function Message({ task, sender, deleteMessage, index }) {
    return (
        <li class={sender === "Me" ? "sender_no_dot" : "receiver_no_dot"}>
            {task}
            <button id="delBut" onClick={() => deleteMessage(index)}>Delete</button>
        </li>
    );
}

export default Message;