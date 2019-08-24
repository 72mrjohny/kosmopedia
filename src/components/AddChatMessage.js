import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/AddChatMessage.css';

class AddChatMessage extends Component {
    state = {
        title: '',
        text: '',
        nickname: '',
        date: new Date().toISOString().slice(0, 10),
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            title: "",
            text: "",
            nickname: ""
        })
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })

    }

    handleClick = () => {
        console.log("dodaj")
        const { title, text, nickname, date } = this.state
        if (text.length > 1) {
            const addMessage = this.props.addMessage(title, text, nickname, date)
            if (addMessage) {
                this.setState({
                    title: "",
                    text: "",
                    nickname: "",
                    date: this.state.date,
                })
            }
        }
        else {
            alert("tytuł, treść posta i nickname musi mieć powyżej 2 znaków!")
        }
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz nową wiadomość na czacie!</h3>
                    <label htmlFor="title">Tytuł posta
                   <input type="text" id="title" name="title" placeholder="Wpisz tytuł posta" value={this.state.title} onChange={this.handleChange} /> </label>
                    <textarea name="text" value={this.state.text} onChange={this.handleChange} placeholder="Wpisz nową wiadomość czat!"></textarea>
                    <label htmlFor="nickname">Nickname:
                   <input type="text" id="nickname" name="nickname" placeholder="Wpisz swój nickname" value={this.state.nickname} onChange={this.handleChange} /> </label>
                    <button onClick={this.handleClick}>wyślij</button>
                    <input type="date" value={this.state.date} />
                </form>
                <Prompt
                    when={this.state.title || this.state.text || this.state.nickname}
                    message="Masz niedokończony formularz. Czy chcesz opuścić stronę?"
                />
            </div>
        )
    }
}

export default AddChatMessage;