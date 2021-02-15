import React, {Component} from 'react'
import './Inquiries.css'



class Inquiries extends Component{
    render(){
        return (
        <div className='App'>
            <article className='margin'>
                <h1 id='Inquiries'>Inquiries</h1>
                <div className='bg-color'>
                    <form action='https://formspree.io/lile7886@gmail.com' method='post'>
                        <fieldset>
                        <legend>E-Mail Me</legend>
                        <label htmlFor='user-name'>Name:</label>
                        <input 
                            className='neumorphic neumorphic--inset pressed'
                            id='user-name' 
                            type='text' 
                            name='name' 
                            placeholder='Name'/>

                        <label htmlFor='email'>E-Mail:</label>
                        <input 
                            className='neumorphic neumorphic--inset pressed'
                            id='email' 
                            type='text' 
                            name='email' 
                            required 
                            placeholder='E-Mail'/>

                        <label htmlFor='email-message'>Questions? Comments? Requests?</label>
                        <textarea 
                            className='neumorphic neumorphic--inset pressed'
                            name='message' 
                            id='email-message' 
                            cols='30' 
                            rows='10' 
                            placeholder='How may I help you?'>
                        </textarea>

                        <button type='submit'>Submit</button>
                        </fieldset>
                    </form>
                </div>
            </article>
        </div>
        );
    }
}

export default Inquiries