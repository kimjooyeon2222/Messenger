
import { useState } from 'react';
import MessagesContainer from './MessagesContainer';
import SendMessageBox from './SendMessageBox';

function Messenger() {

    const [messages, setMessages] = useState([]);

    // addMessage
    function addMessage(sender, message) {
        const newMessage = { sender: sender, message: message };
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
    }

    // deleteTask
    function deleteMessage(delete_index) {
        const newMessages = messages.filter((item, item_index) => item_index !== delete_index)
        setMessages(newMessages);
    }

    return (
        <div>
            <h1>Messenger</h1>
            <nav id="Sender">
                <SendMessageBox sender={"Me"} addMessage={addMessage} />
            </nav>
            <section id="Box">
                <MessagesContainer messages={messages} deleteMessage={deleteMessage} />
            </section>
            <footer id="Receiver">
                <SendMessageBox sender={"Friend"} addMessage={addMessage} />
            </footer>
        </div>
    );
}

export default Messenger;