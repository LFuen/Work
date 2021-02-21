import React, {Component} from 'react'
import react from '../../icons/react.png'
import html from '../../icons/html5.png'
import css from '../../icons/css3.png'
import express from '../../icons/express.png'
import node from '../../icons/nodejs.png'
import npm from '../../icons/npm.png'
import jquery from '../../icons/jquery.png'
import postgres from '../../icons/postgresql.png'
import heroku from '../../icons/heroku.png'
import mocha from '../../icons/mocha.png'
import knex from '../../icons/knex.png'
import gh from '../../icons/gh.png'
import git from '../../icons/git.png'
import js from '../../icons/js.png'

import './Welcome.css'
import { WelcomeDiv } from './styledW'


class Welcome extends Component{
    render(){
        return (
        <WelcomeDiv>
            <header id='Top' className='margin'>
                <h1 className='flexRow' >Lili Fuentes</h1>
            </header>      
            <div className='margin'> 
                <span title='Say Cheese!'><img className='centerImage' alt='Hiking' src='https://lfuen.github.io/portimages/smile.jpg'/></span> 
            </div>
            <div>
                <h2 className='flexRow' id='Welcome'>Welcome</h2>
                    <div className='flexColumn'>
                    <p>My name is Lili and I want to thank you for visiting my page. Let me take a minute here to share what it is that I do.</p>
                    <p>My official title is Software Engineer, but I'm versed in:</p>
                    </div>
                    <div className='borderOne' id='versed'>
                    <p><b>Front-end Developing</b></p>
                    <p><b>Back-end Developing</b></p> 
                    <p><b>Full-Stack Developing</b></p> 
                    {/* <p>
                        <img alt='HTML' src={html}/>
                        <img alt='CSS' src={css}/>
                        <img alt='JavaScript' src={js}/>
                        <img alt='jQuery' src={jquery}/>
                        <img alt='Github' src={gh}/>
                        <img alt='Git' src={git}/>
                        <img alt='React' src={react}/>
                        <img alt='Node' src={node}/>
                        <img alt='PostgreSQL' src={postgres}/>
                        <img alt='NPM' src={npm}/>
                        <img alt='Express' src={express}/>
                        <img alt='KNEX' src={knex}/>
                        <img alt='Mocha' src={mocha}/>
                        <img alt='Heroku' src={heroku}/>
                    </p> */}
                    </div>
            </div>
        </WelcomeDiv>
        );
    }
}

export default Welcome