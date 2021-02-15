import React, {Component} from 'react'
import './Contact.css'


class Contact extends Component{

    render(){
        return (
        <div className='App'>
            <article className='margin'>
                <h1 id='Contact'>Contact</h1>
                <div>
                    <p>You can find links to my profile(s) and E-Mail below:</p>
                    <div className='bg-color'>
                        <p>
                            <a   
                                href='https://www.linkedin.com/in/lilifuentes/' 
                                target='_blank' 
                                rel='noreferrer'>
                                <span title='Lili Fuentes on LinkedIn'>
                                    <img    
                                        className='regSize' 
                                        alt='LinkedIn' 
                                        src='https://lfuen.github.io/portimages/linkedIn-1.png'/>
                                </span>
                            </a>
                        </p>

                        <p>
                            <a 
                                href='https://www.github.com/LFuen' 
                                target='_blank' 
                                rel='noreferrer'>
                                <span title='Lili Fuentes on GitHub'>
                                    <img 
                                        className='regSize' 
                                        alt='GitHub' 
                                        src='https://lfuen.github.io/portimages/github-1.png'/>
                                </span>
                            </a>
                        </p>
                        
                        <p>
                            <a 
                                href='https://www.instagram.com/lilifuen' 
                                target='_blank' 
                                rel='noreferrer'>
                                <span title='Lili Fuentes on Instagram'>
                                    <img 
                                        className='regSize' 
                                        alt='Instagram' 
                                        src='https://lfuen.github.io/portimages/theGram-1.png'/>
                                </span>
                            </a>
                        </p>
                        
                        <p>
                            <a
                                href='mailto:lile7886@gmail.com' 
                                target='_blank' 
                                rel='noreferrer'>
                                <span title='LilE7886@GMail.com'>
                                    <img 
                                        className='regSize' 
                                        alt='E-Mail' 
                                        src='https://lfuen.github.io/portimages/email-1.png'/>
                                </span>
                            </a>
                        </p>
                    </div>
                </div>
            </article>
        </div>
        );
    }
} 


export default Contact