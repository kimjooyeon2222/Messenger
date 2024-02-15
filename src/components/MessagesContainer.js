import Message from "./Message";

function MessagesContainer({ messages, deleteMessage }) {

  return (
    <div class="Box">
      {
        messages.map((message, message_index) => {
          return <Message task={message.message} sender={message.sender} deleteMessage={deleteMessage} index={message_index} />
        })
      }
    </div>
  );
}

export default MessagesContainer;
