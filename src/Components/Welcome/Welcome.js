import React, {Component} from 'react'
import react from './icons/react.png'
import html from './icons/html5.png'
import css from './icons/css3.png'
import smile from './images/smile.jpg'
import node from './icons/nodejs.png'
import styled from './icons/styled.png'
import heroku from './icons/heroku.png'
import figma from './icons/figma.png'
import postgres from './icons/postgresql.png'
import vstudio from './icons/vstudio.png'
import gh from './icons/gh.png'
import git from './icons/git.png'
import js from './icons/js.png'

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
                <span title='Say Cheese!'><img className='badge centerImage' alt='Hiking' src={smile}/></span> 
            </div>
            <div>
                <h2 className='flexRow' id='Welcome'>Welcome</h2>
                <div className='flexColumn'>
                    <p>My name is Lili and I want to thank you for visiting my page. Let me take a minute here to share what it is that I do.</p>
                    <p>My official title is Software Engineer, but I'm versed in:</p>
                </div>
                <div className='borderOne' id='versed'>
                    <p><b>Front-end Development</b></p>
                    <p><b>UI Development / Design</b></p>
                    <p><b>AWS: Solutions Architect Training</b></p>
                </div>
                <Images className='icons'>
                    <img className='badge' src={html} alt='html'/>
                    <img className='badge' src={css} alt='css'/>
                    <img className='badge' src={react} alt='react'/>
                </Images>
                    <br/>
                <Images className='icons'>
                    <img className='badge' src={styled} alt='styled components'/>
                    <img className='badge' src={gh} alt='github'/>
                    <img className='badge' src={postgres} alt='postgresql'/>
                </Images>
                <Images>
                    <img className='badge' src={js} alt='javascript'/>
                    <img className='badge' src={node} alt='node'/>
                </Images>
                <Images>
                    <img className='badge' src={git} alt='git'/>
                    <img className='badge' src={heroku} alt='heroku'/>
                    <img className='badge' src={vstudio} alt='visual studio'/>
                    <img className='badge' src={figma} alt='figma'/>
                </Images>
            </div>
        </WelcomeDiv>
        );
    }
}

export default Welcome
