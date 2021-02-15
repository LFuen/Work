import React, {Component} from 'react'
import './Welcome.css'


class Welcome extends Component{
    render(){
        return (
        <div>
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
                    <p><b>React / JavaScript / HTML / CSS / jQuery / Node</b></p>
                    </div>
            </div>
        </div>
        );
    }
}

export default Welcome