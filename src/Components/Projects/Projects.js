import React, {Component} from 'react'
import './Projects.css'
import travel from './images/travelers.png'
import conc from './images/concretti.png'
import { ProjectDiv } from './styledP';


class Projects extends Component{
    render(){
        return (
        <ProjectDiv className='projects'>
            <h1 className='flexRow margin' id='Projects'>Projects</h1>
            <section className='flexColumn'>

                <h2>Travelers</h2>
                <div className='borderOne flexRow proj'>
                    <a href='https://travelers.vercel.app/' target='_blank' rel='noreferrer'><img src={travel} alt='Travelers'/></a>
                </div>
                <br/>
                <a href='https://github.com/LFuen/travelers-client'>Project Repo</a> 
                <p className='describe'>Share travel guides for a community of users.</p>
                <p className='skills'><u><b>Skills:</b><br/></u> React / JavaScript / CSS / Node / PostgreSQL</p>
                <br/>
                <br/>
                <br/>
                    
                <h2>Concretti</h2>
                <div className='borderOne flexRow proj'>
                    <a href='http://democlient.vercel.app/' target='_blank' rel='noreferrer'><img src={conc} alt='Concretti'/></a>
                </div>
                <br/>
                <a href='https://github.com/LFuen/ConcDemoClient' target='_blank' rel='noreferrer'>Project Repo</a>
                <p className='describe'>This project is a suite of applications for Concretti, an artisanal concrete production company.</p>
                <p className='skills'><u><b>Skills:</b><br/></u> React / JavaScript / CSS / Node / PostgreSQL</p>

            </section>
        </ProjectDiv>
        );
    }
}


export default Projects
