import React, {Component} from 'react'
import Draw from '../IllustrateHobby/Draw';
import PhotoHobby from '../PhotoHobby/PhotoHobby'
import './About.css'
import { AboutDiv } from './styledA';

class About extends Component{
    render(){
        return (
        <AboutDiv className='about'>
            <section className='bg-color'>
            <h1 className='flexRow' id='About'>About</h1>
            
            <div className='flexColumn'>
            <p className='item'>I have been a software engineer for 3 years. The opportunity to dive into coding and make it a career almost 
                literally fell into my lap, thanks to COVID (remember that?). I had a mind-shift and decided I would do something that would 
                challenge and intellectually stimulate me, so I decided to pursure a career in Software Engineering, specifically Front End work.</p>
                <p><b>Services I offer include, but are not limited to:</b></p>
            </div>
            
            <div className='borderOne' id='services'> 
                <p><b>Front End UI Design</b></p>
                <p><b>Application Development and Testing</b></p>
                <p><b>Systems Integration</b></p>
                <p><b>SEO</b></p>
            </div>
            <div className='flexColumn'>
            <p className='item'>When I'm not behind a computer though, I'm not even indoors. I just moved BACK to Florida from living the last 3 years
               in DC. Hiking, photography, and art are my go-to's when I'm not hacking away at a keyboard. This is absolutely where my love of front-end 
               and design comes in.</p>
            </div>
            </section>
            <h2 className='flexRow'>Below are my some of my favorite shots and some of my art:</h2>
            <PhotoHobby />
            <Draw />

        </AboutDiv>
        );
    }
}


export default About
