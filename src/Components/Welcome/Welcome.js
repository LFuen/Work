import React, {Component} from 'react'
// import react from '../../icons/react.png'
// import html from '../../icons/html5.png'
// import css from '../../icons/css3.png'
// import express from '../../icons/express.png'
// import node from '../../icons/nodejs.png'
// import styled from '../../icons/styled.png'
// import heroku from '../../icons/heroku.png'
// import jquery from '../../icons/jquery.png'
// import postgres from '../../icons/postgresql.png'
// import vstudio from '../../icons/vstudio.png'
// import gh from '../../icons/gh.png'
// import git from '../../icons/git.png'
// import js from '../../icons/js.png'

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
                    </div>
                    {/* <Images className='icons'>
                        <img src={html} />
                        <img src={css} />
                        <img src={js} />
                        <img src={node} />
                        <img src={express} />
                        <img src={react} />
                    </Images>
                        <br/>
                    <Images className='icons'>
                        <img src={styled} />
                        <img src={gh} />
                        <img src={postgres} />
                        <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
                        <img src={heroku} />
                        <img src={vstudio} />
                    </Images> */}
            </div>
        </WelcomeDiv>
        );
    }
}

export default Welcome