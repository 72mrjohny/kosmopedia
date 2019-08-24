import React, { Component } from 'react';
import AddChatMessage from '../components/AddChatMessage';
import Chat from '../components/Chat';
import '../styles/ChatPage.css';


class ChatPage extends Component {
    counter = 9
    state = {
        chatMessages: [
            {
                id: 0,
                title: 'może być',
                text: 'ale stronka jeszcze do dopracowania',
                nickname: 'Pani Hania ze Szczecina',
                date: '2018-02-17',
                score: 0,
                active: true,
            },
            {
                id: 1,
                title: 'elo',
                text: 'stronka zapowiada sie ciekawie, ale mała baza danych póki co',
                nickname: 'Zbyszek z Wałbrzycha',
                date: '2018-01-17',
                score: 0,
                active: true,
            },
            {
                id: 2,
                title: 'stronka na 4+',
                text: 'wszystko mi sie podoba, fajnie klika i przeskakuje',
                nickname: 'Julka07',
                date: '2018-04-29',
                score: 0,
                active: true,
            },

        ]
    }

    rateChatMessage = (id, value) => {



        this.setState(prevState => ({

            score: prevState.score + value
        }))




        console.log(id, value)
        // console.log(this.state.chatMessages);
        // console.log(this.chatMessages);
        // let test = this.state.chatMessages.find(message => message.id === id)
        // var test = this.chatMessages.find(function (element) {
        //     if (element.id === id) {
        //         return element;
        //     }
        // });
        // return this.setState({ 
        //     chatMessages
        // }
        // });
        // return this.setState(() => ({
        //     [score]: 2
        // }));
        // console.log(this.state.chatMessages[id].score)
        // return (this.setState({
        //     this.test.score: score + parseInt(value)
        // }))
    }

    addMessage = (title, text, nickname, date) => {
        console.log("dodany obiekt do tablicy");
        const newMessage = {
            id: this.counter,
            title: title,
            text: text,
            nickname: nickname,
            date: date,
            score: '0',
            active: true,
        }
        this.counter++
        this.setState(prevState => ({
            chatMessages: [...prevState.chatMessages, newMessage]
        }))
        return true
    }
    render() {
        return (
            <div className="chatBGC">
                <h1>Czat</h1>
                <Chat rateChatMessage={this.rateChatMessage} chatMessages={this.state.chatMessages} />
                <AddChatMessage addMessage={this.addMessage} />
            </div>
        );
    }
}

export default ChatPage;


