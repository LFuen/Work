import React, {Component} from 'react'
import './Projects.css'
import travel from './images/travelers.png'
import random from './images/question.png'
import chef from './images/chef.png'
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
                <h2>La Carte</h2>
                <div className='borderOne flexRow proj'>
                    <a href='https://la-carte.lfuen.vercel.app/' target='_blank' rel='noreferrer'><img src={chef} alt='LaCarte'/></a>
                </div>
                <br/>
                <a href='https://github.com/LFuen/laCarte' target='_blank' rel='noreferrer'>Project Repo</a>
                <p className='describe'>La Carte is a healthy meal-ordering app, catered figuratively and quite <em>literally</em> to the ever-working individual.
                This app was created to show proficiency in React and JavaScript, along with CRUD functionality and the use of databases.</p>
                <p className='skills'><u><b>Skills:</b><br/></u> React / JavaScript / CSS / Node / PostgreSQL</p>
                <br/>
                <br/>
                <br/>
                <h2>The Ridiculously Random Quiz</h2>
                <div className='borderOne flexRow proj'>
                    <a href='https://lfuen.github.io/QuizApp/' target='_blank' rel='noreferrer'><img src={random} alt='QuizApp'/></a>
                </div>
                <br/>
                <a href='https://github.com/LFuen/QuizApp'>Project Repo</a>                
                <p className='describe'>Fun and random quiz to show use with jQuery and Javascript.</p>
                <p className='skills'><u><b>Skills:</b><br/></u> jQuery / JavaScript / HTML / CSS</p>

            </section>
        </ProjectDiv>
        );
    }
}


export default Projects