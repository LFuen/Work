import React, {Component} from 'react'
import './Contact.css'
import { ContactDiv } from './styledC';
import gram from './images/gram.png'
import email from './images/email.png'
import linked from './images/linked.png'
import git from './images/github.png'


class Contact extends Component{

    render(){
        return (
        <ContactDiv className='App'>
            <article className='margin'>
                <h1 id='Contact'>Contact</h1>
                <div>
                    <p>You can find links to my profile(s) and E-Mail below:</p>
                    <div className='bg-color'>
                        <p>
                            <a   
                                href='https://www.linkedin.com/in/lilifuentes/' 
                                target='_blank' 
                                rel='noopener noreferrer'>
                                <span title='Lili Fuentes on LinkedIn'>
                                    <img    
                                        className='regSize' 
                                        alt='LinkedIn' 
                                        src={linked}/>
                                </span>
                            </a>
                        </p>

                        <p>
                            <a 
                                href='https://www.github.com/LFuen' 
                                target='_blank' 
                                rel='noopener noreferrer'>
                                <span title='Lili Fuentes on GitHub'>
                                    <img 
                                        className='regSize' 
                                        alt='GitHub' 
                                        src={git}/>
                                </span>
                            </a>
                        </p>
                        
                        <p>
                            <a 
                                href='https://www.instagram.com/lilifuen' 
                                target='_blank' 
                                rel='noopener noreferrer'>
                                <span title='Lili Fuentes on Instagram'>
                                    <img 
                                        className='regSize' 
                                        alt='Instagram' 
                                        src={gram}/>
                                </span>
                            </a>
                        </p>
                        
                        <p>
                            <a
                                href='mailto:lile7886@gmail.com' 
                                target='_blank' 
                                rel='noopener noreferrer'>
                                <span title='E-Mail Me!'>
                                    <img 
                                        className='regSize' 
                                        alt='E-Mail' 
                                        src={email}/>
                                </span>
                            </a>
                        </p>
                    </div>
                </div>
            </article>
        </ContactDiv>
        );
    }
} 


export default Contact
