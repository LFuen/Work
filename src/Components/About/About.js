import React, {Component} from 'react'
import PhotoHobby from '../PhotoHobby/PhotoHobby'
import './About.css'

class About extends Component{
    render(){
        return (
        <div className='about'>
            <section className='bg-color'>
            <h1 className='flexRow' id='About'>About</h1>
            <div className='flexColumn'>
            <p className='item'>This is where I tell you how coding is my whole entire life and there's nothing else that I do all day because I'm
            just that obsessed with it. Well...that's <i>almost</i> the reality! To be honest with you, I have come to coding pretty late
            in life. I have had my share of careers and coding is honestly <i>the most</i> exciting one so far!</p>
            </div>
            
            <div className='flexColumn'>
            <p className='item'>I've been a massage therapist for a decade. The opportunity to dive into coding and make it a career almost literally
                fell into my lap. I was on my laptop one afternoon, searching through job listings, and up came a bootcamp school 
                called <a href='https://www.thinkful.com' target='_blank' rel='noreferrer'>Thinkful</a>. Thanks to COVID (remember that?), I had a mind-shift and
                decided I would do something that would challenge and intellectually stimulate me. Like I said before, I've had various 
                career lines, from teaching biology, coaching high school softball, real estate underwriting, and even a professional 
                wolverine wrangler. Ok, that last one was just a test to see if you were still with me! But it would <i>totally</i> be
                exciting, not to mention absolutely terrifying! I love collaborating in every job that I've ever had, and I would love the 
                chance to pick the brains of great developers and coders out there!</p>
                <p><b>Services I offer include, but are not limited to:</b></p>
            </div>
            
            <div className='borderOne margin' id='services'> 
                <p><b>Database Integration</b></p>
                <p><b>Application Development and Testing</b></p>
                <p><b>Systems Integration</b></p>
                <p><b>Server Side Development</b></p>
                <p><b>SEO</b></p>
            </div>
            <div className='flexColumn'>
            <p className='item'>When I'm not behind a computer though, I'm not even indoors. I just moved to Maryland from living my entire life in the
                    hot and muggy Florida sun, down in Miami. I fell in love with Maryland when I visited a couple of years back and I 
                    decided to make it my new home last year. Hiking and photography are my go-to's when I'm not hacking away at a keyboard.</p>
            </div>
            </section>
            <h2 className='flexRow'>These are some of my favorite shots:</h2>
            <PhotoHobby />

        </div>
        );
    }
}


export default About