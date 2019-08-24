import React from 'react';
import ChatMessage from './ChatMessage';

const Chat = (props) => {

    const chatMessages = props.chatMessages.map(message => <ChatMessage key={message.id} message={message} rateChatMessage={props.rateChatMessage}
    />)

    return (
        <>
            <div className="top">
                <h1>Wiadomości czat TOP </h1>
                {chatMessages}
            </div>
            <hr />
            {/* <div className="active">
                <h1>Ostatnie wiadomości czat </h1>
            </div> */}
        </>
    );
}

export default Chat;