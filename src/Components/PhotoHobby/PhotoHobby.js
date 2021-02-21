import {Component} from 'react'
import './PhotoHobby.css'


class PhotoHobby extends Component {

    render() {

        return (
            <div className='bg-color margin mobile'>
                <div className='flexRow'>
                    <div className='item'>
                        <a 
                            className='picture' 
                            href='https://lfuen.github.io/portimages/greatFalls.jpeg' 
                            target='_blank'
                            rel='noreferrer'
                            title='Great Falls'>
                            
                            <img 
                                src='https://lfuen.github.io/portimages/greatFalls.jpeg' // {photos[active]}
                                alt='Great Falls' 
                                width='400'/>
                        </a>
                    </div>
                    <div className='item'>
                        <a 
                            className='picture' 
                            href='https://lfuen.github.io/portimages/reflection.jpeg' 
                            target='_blank'
                            rel='noreferrer'
                            title='Reflection'>
                            
                            <img 
                                src='https://lfuen.github.io/portimages/reflection.jpeg' 
                                alt='Reflection' 
                                width='400'/>
                        </a>
                    </div>
                    <div className='item'>
                        <a 
                            className='picture' 
                            href='https://lfuen.github.io/portimages/road.jpeg' 
                            target='_blank'
                            rel='noreferrer'
                            title='Sherrill Drive'>
                            
                            <img 
                                src='https://lfuen.github.io/portimages/road.jpeg' 
                                alt='Sherrill Drive' 
                                width='400'/>
                        </a>
                    </div>
                    <div className='item'>
                        <a 
                            className='picture' 
                            href='https://lfuen.github.io/portimages/waterfall.jpeg' 
                            target='_blank'
                            rel='noreferrer'
                            title='Cunningham Falls'>
                            
                            <img 
                                src='https://lfuen.github.io/portimages/waterfall.jpeg' 
                                alt='Cunningham Falls' 
                                width='400'/>
                        </a>
                    </div>
                    <div className='item'>    
                        <a 
                            className='picture' 
                            href='https://lfuen.github.io/portimages/stream.jpeg' 
                            target='_blank'
                            rel='noreferrer'
                            title='Pinehurst Branch'>
                            
                            <img 
                                src='https://lfuen.github.io/portimages/stream.jpeg' 
                                alt='Pinehurst Branch' 
                                width='400'/>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default PhotoHobby

