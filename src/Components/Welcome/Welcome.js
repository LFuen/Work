import React, {Component} from 'react'
import react from '../../icons/react.png'
import html from '../../icons/html5.png'
import css from '../../icons/css3.png'
import express from '../../icons/express.png'
import node from '../../icons/nodejs.png'
import styled from '../../icons/styled.png'
import heroku from '../../icons/heroku.png'
import jquery from '../../icons/jquery.png'
import postgres from '../../icons/postgresql.png'
import vstudio from '../../icons/vstudio.png'
import gh from '../../icons/gh.png'
import git from '../../icons/git.png'
import js from '../../icons/js.png'

import './Welcome.css'
import { WelcomeDiv, Images } from './styledW'


class Welcome extends Component{
    render(){
        return (
        <WelcomeDiv>
            <header id='Top' className='margin'>
                <h1 className='flexRow' >Lili Fuentes</h1>
            </header>      
            <div className='margin'> 
                <span title='Say Cheese!'><img className='badge' className='centerImage' alt='Hiking' src='https://lfuen.github.io/portimages/smile.jpg'/></span> 
            </div>
            <div>
                <h2 className='flexRow' id='Welcome'>Welcome</h2>
                    <div className='flexColumn'>
                    <p>My name is Lili and I want to thank you for visiting my page. Let me take a minute here to share what it is that I do.</p>
                    <p>My official title is Software Engineer, but I'm versed in:</p>
                    </div>
                    <div className='borderOne' id='versed'>
                    <p><b>Front-end Development</b></p>
                    <p><b>Back-end Development</b></p> 
                    <p><b>Full-Stack Development</b></p> 
                    </div>
                    <Images className='icons'>
                        <img className='badge' src={html} />
                        <img className='badge' src={css} />
                        <img className='badge' src={react} />
                        <img className='badge' src={js} />
                        <img className='badge' src={node} />
                        <img className='badge' src={express} />
                    </Images>
                        <br/>
                    <Images className='icons'>
                        <img className='badge' src={styled} />
                        <img className='badge' src={gh} />
                        <img className='badge' src={postgres} />
                        <img className='badge' src={heroku} />
                        <img className='badge' src={git} />
                        <img className='badge' src={vstudio} />
                    </Images>
            </div>
        </WelcomeDiv>
        );
    }
}

export default Welcome