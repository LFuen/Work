import React, {Component} from 'react'
import drax from './images/drax.jpg'
import heart from './images/heart.jpg'
import nine from './images/nine.jpg'
import reach from './images/reach.jpeg'
import rose from './images/rose.jpeg'

class Draw extends Component {
    render() {
        return (
            <div className='bg-color margin mobile'>
            <div className='flexRow'>
                <div className='item'>
                    <a 
                        className='picture' 
                        href={nine} 
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Great Falls'>
                        
                        <img 
                            src={nine} 
                            alt='Great Falls' 
                            width='400'
                            className='photos'/>
                    </a>
                </div>
                <div className='item'>
                    <a 
                        className='picture' 
                        href={reach} 
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Reflection'>
                        
                        <img 
                            src={reach} 
                            alt='Reflection' 
                            width='400'
                            className='photos'/>
                    </a>
                </div>
                <div className='item'>
                    <a 
                        className='picture' 
                        href={heart} 
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Sherrill Drive'>
                        
                        <img 
                            src={heart} 
                            alt='Sherrill Drive' 
                            width='400'
                            className='photos'/>
                    </a>
                </div>
                <div className='item'>
                    <a 
                        className='picture' 
                        href={rose} 
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Cunningham Falls'>
                        
                        <img 
                            src={rose} 
                            alt='Cunningham Falls' 
                            width='400'
                            className='photos'/>
                    </a>
                </div>
                <div className='item'>    
                    <a 
                        className='picture' 
                        href={drax} 
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Pinehurst Branch'>
                        
                        <img 
                            src={drax} 
                            alt='Pinehurst Branch' 
                            width='400'
                            className='photos'/>
                    </a>
                </div>

            </div>
        </div>
        )
    }
}

export default Draw