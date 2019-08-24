import React from 'react';
import '../styles/contact.css';
import { Prompt } from 'react-router-dom'


class ContactPage extends React.Component {
    state = {
        value: "",
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })

    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do mnie</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość"></textarea>
                    <button>wyślij</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message="Masz niedokończony formularz. Czy chcesz opuścić stronę?"
                />
            </div>
        )
    }
}
export default ContactPage;