import React, {Component} from 'react'
import axios from 'axios'
import './Inquiries.css'



class Inquiries extends Component{

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '', 
            message: ''
        }
    }

    nameChange = (event) => {
        this.setState({name: event.target.value})
    }

    emailChange = (event) => {
        this.setState({email: event.target.value})
    }

    messageChange = (event) => {
        this.setState({message: event.target.value})
    }

    resetForm = () => {
        this.setState({name: '', email: '', message: ''})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios({
            method: "POST",
            url: "https://formspree.io/f/mnqlpvll"
        })
    }

    render(){
        return (
        <div className='App'>
            <article className='margin'>
                <h1 id='Inquiries'>Inquiries</h1>
                <div>
                    <form onSubmit={this.handleSubmit} method='POST' className='messaging'>
                        <div className='group'>
                            <label htmlFor='name' className='form-label'>Name:</label>
                            <input 
                            className='neumorphic'
                            id='name' 
                            type='text' 
                            onChange={this.nameChange}
                            value={this.state.name} 
                            placeholder='Name'
                            required/>

                        <label htmlFor='email' className='form-label'>E-Mail:</label>
                        <input 
                            className='neumorphic'
                            id='email' 
                            type='text' 
                            onChange={this.emailChange} 
                            value={this.state.email}
                            placeholder='E-Mail'
                            required />

                        <label htmlFor='message' className='form-label'>Message:</label>
                        <textarea 
                            className='neumorphic'
                            id='message' 
                            cols='30' 
                            rows='5' 
                            onChange={this.messageChange} 
                            value={this.state.message}
                            placeholder='How may I help you?'>
                        </textarea>

                        <button type='submit' id='submit' onClick={this.resetForm}>Send</button>
                        </div>
                    </form>
                </div>
            </article>
        </div>
        );
    }
}

export default Inquiries
