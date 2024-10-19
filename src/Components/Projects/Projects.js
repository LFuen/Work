import React, {Component} from 'react'
import './Projects.css'
import figma from './images/figma3D.png'
import conc from './images/concretti.png'
import montalvo from './images/montalvo.png'
import cfuen from './images/cfuen.svg'
import { ProjectDiv } from './styledP';


class Projects extends Component{
    render(){
        return (
        <ProjectDiv className='projects'>
            <h1 className='flexRow margin' id='Projects'>Projects</h1>
            <section className='flexColumn'>

                <h2>UX/UI Portfolio Work</h2>
                <div className='borderOne flexRow proj'>                    
                    <a href='https://www.figma.com/files/team/938620361295648566/project/23543582/Projects?fuid=938620357300299496' target='_blank' rel='noopener noreferrer'><img src={figma} alt='3D Figma Logo by Nand Kishor on Dribbble' /></a>
                </div>                    
                <p className='skills'>(logo credit to Nanda Kishor on Dribbble)</p>


                <h2>CFuen Therapy</h2>
                <div className='borderOne flexRow proj'>
                    <a href='https://www.CFuenTherapy.com/' target='_blank' rel='noopener noreferrer'><img src={cfuen} alt='Montalvo Interiors'/></a>
                </div>
                <br/> 
                <p className='describe'>Personal and professional website for mental health therapy.</p>
                <p className='skills'><u><b>Skills:</b><br/></u> React / NextJS / JavaScript / CSS / Node / AWS Amplify</p>

                <h2>Montalvo Interiors</h2>
                <div className='borderOne flexRow proj'>
                    <a href='https://montalvo-interiors.com/' target='_blank' rel='noopener noreferrer'><img src={montalvo} alt='Montalvo Interiors'/></a>
                </div>
                <br/> 
                <p className='describe'>Interior design website for Montalvo Interiors.</p>
                <p className='skills'><b>Created and designed in Wix.</b></p>

                    
                <h2>Concretti</h2>
                <div className='borderOne flexRow proj'>
                    <a href='http://democlient.vercel.app/' target='_blank' rel='noopener noreferrer'><img src={conc} alt='Concretti'/></a>
                </div>
                <br/>
                <a href='https://github.com/LFuen/ConcDemoClient' target='_blank' rel='noopener noreferrer'>Project Repo</a>
                <p className='describe'>This project is a suite of applications for Concretti, an artisanal concrete production company.</p>
                <p className='describe'>The database for this project has been shut down, please visit the Github Repository for screenshots.</p>
                <p className='skills'><u><b>Skills:</b><br/></u> React / JavaScript / CSS / Node / PostgreSQL</p>

            </section>
        </ProjectDiv>
        );
    }
}


export default Projects
