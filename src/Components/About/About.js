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
            <p className='item'>I've been a massage therapist for a decade. The opportunity to dive into coding and make it a career almost literally
                fell into my lap. Thanks to COVID (remember that?), I had a mind-shift and decided I would do something that would challenge and 
                intellectually stimulate me. Like I said before, I've had various career lines, from teaching biology, coaching high school softball, 
                real estate underwriting, and even a professional wolverine wrangler. Ok, that last one was just a test to see if you were still with me! 
                But it would <i>totally</i> be exciting, not to mention absolutely terrifying! I love collaborating in every job that I've ever had, 
                and I would love the chance to pick the brains of great developers and coders out there!</p>
                <p><b>Services I offer include, but are not limited to:</b></p>
            </div>
            
            <div className='borderOne' id='services'> 
                <p><b>Front End UI Design</b></p>
                <p><b>Application Development and Testing</b></p>
                <p><b>Systems Integration</b></p>
                <p><b>SEO</b></p>
            </div>
            <div className='flexColumn'>
            <p className='item'>When I'm not behind a computer though, I'm not even indoors. I just moved to Maryland from living my entire life in the
                    hot and muggy Florida sun, down in Miami. I fell in love with Maryland when I visited a couple of years back and I 
                    decided to make it my new home in 2019. Hiking, photography, and art are my go-to's when I'm not hacking away at a keyboard.</p>
            </div>
            </section>
            <h2 className='flexRow'>Below are my some of my favorite shots and some of my art:</h2>
            <PhotoHobby />
            <Draw />

        </AboutDiv>
        );
    }
}

//testing

export default About