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
            <p className='item'>I have been a software engineer for almost 4 years. I greatly enjoy designing and crafting out specifics in user experience. Front End development is where I prefer to spend my time and it's what I do best.</p>
                <p><b>Services I offer include, but are not limited to:</b></p>
            </div>
            
            <div className='borderOne' id='services'> 
                <p><b>Front End UI Design</b></p>
                <p><b>Application Design, Development, and Testing</b></p>
                <p><b>Systems Integration</b></p>
                <p><b>SEO</b></p>
            </div>
            <div className='flexColumn'>
            <p className='item'>Hiking, photography, and art are my go-to's when I'm not hacking away at a keyboard. This is absolutely where my love of front-end 
               and design comes in.</p>
            </div>
            </section>
            <h2 className='flexRow'>Below are some of my favorite shots and some of my art:</h2>
            <PhotoHobby />
            <Draw />

        </AboutDiv>
        );
    }
}


export default About
