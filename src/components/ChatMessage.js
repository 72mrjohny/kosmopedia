import React from 'react';
import '../styles/chatMessage.css';

const ChatMessage = (props) => {


    const { title, text, nickname, date, score, id } = props.message;
    // const rateChatMessage = props.rateChatMessage;
    return (
        <div className="chatMessage">
            <p>
                <h2>{title}</h2>
                <h4>{text}</h4>
                <h5>{nickname}</h5>
                <br />
                <span>data:{date}</span>
                <div id="score">{score}</div>
                <button id="plus" onClick={() => props.rateChatMessage(id, 1)}><i class="far fa-thumbs-up"></i></button>
                <button id="minus" onClick={() => props.rateChatMessage(id, -1)}><i class="far fa-thumbs-down"></i></button>


            </p>
        </div>
    );
}

export default ChatMessage;