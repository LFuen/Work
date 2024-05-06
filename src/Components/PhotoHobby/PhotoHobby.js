import React, {Component} from 'react'
import './PhotoHobby.css'
import great from './images/greatFalls.jpeg'
import reflect from './images/reflection.jpeg'
import road from './images/road.jpeg'
import waterfall from './images/waterfall.jpeg' 
import stream from './images/stream.jpeg'


class PhotoHobby extends Component {

    render() {

        return (
            <div className='bg-color margin mobile'>
                <div className='flexRow'>
                    <div className='item'>
                        <a 
                            className='picture' 
                            href={great} 
                            target='_blank'
                            rel='noopener noreferrer'
                            title='Great Falls'>
                            
                            <img 
                                src={great} 
                                alt='Great Falls' 
                                width='400'
                                className='photos'/>
                        </a>
                    </div>
                    <div className='item'>
                        <a 
                            className='picture' 
                            href={reflect} 
                            target='_blank'
                            rel='noopener noreferrer'
                            title='Reflection'>
                            
                            <img 
                                src={reflect} 
                                alt='Reflection' 
                                width='400'
                                className='photos'/>
                        </a>
                    </div>
                    <div className='item'>
                        <a 
                            className='picture' 
                            href={road} 
                            target='_blank'
                            rel='noopener noreferrer'
                            title='Sherrill Drive'>
                            
                            <img 
                                src={road} 
                                alt='Sherrill Drive' 
                                width='400'
                                className='photos'/>
                        </a>
                    </div>
                    <div className='item'>
                        <a 
                            className='picture' 
                            href={waterfall} 
                            target='_blank'
                            rel='noopener noreferrer'
                            title='Cunningham Falls'>
                            
                            <img 
                                src={waterfall} 
                                alt='Cunningham Falls' 
                                width='400'
                                className='photos'/>
                        </a>
                    </div>
                    <div className='item'>    
                        <a 
                            className='picture' 
                            href={stream} 
                            target='_blank'
                            rel='noopener noreferrer'
                            title='Pinehurst Branch'>
                            
                            <img 
                                src={stream} 
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

export default PhotoHobby

