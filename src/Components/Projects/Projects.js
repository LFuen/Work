import React, {Component} from 'react'
import './Projects.css'
import travel from '../../icons/travelers.png'


class Projects extends Component{
    render(){
        return (
        <div className='projects'>
            <h1 className='flexRow margin' id='Projects'>Projects</h1>
            <div className='flexColumn'>

                <h2>Travelers</h2>
                <p className='describe'>Share travel guides for a community of users.</p>
                <p className='skills'><u><b>Skills:</b></u> React / JavaScript / CSS / Node / PostgreSQL</p>
                <a href='https://github.com/LFuen/travelers-client'>Project Repo</a>                
                <br/>
                <div className='borderOne flexRow proj'>
                    <a href='https://travelers.vercel.app/' target='_blank' rel='noreferrer'><img src={travel} alt='Travelers'/></a>
                </div>

                <br/>
                <br/>
                <h2>La Carte</h2>
                <p className='describe'>La Carte is a healthy meal-ordering app, catered figuratively and quite <em>literally</em> to the ever-working individual.
                This app was created to show proficiency in React and JavaScript, along with CRUD functionality and the use of databases.</p>
                <p className='skills'><u><b>Skills:</b></u> React / JavaScript / CSS / Node / PostgreSQL</p>
                <a href='https://github.com/LFuen/laCarte' target='_blank' rel='noreferrer'>Project Repo</a>
                <br/>
                <div className='borderOne flexRow proj'>
                    <a href='https://la-carte.lfuen.vercel.app/' target='_blank' rel='noreferrer'><img src='https://lfuen.github.io/portimages/chef.png' alt='LaCarte'/></a>
                </div>
                
                <br/>
                <br/>
                <h2>The Ridiculously Random Quiz</h2>
                <p className='describe'>Fun and random quiz to show use with jQuery and Javascript.</p>
                <p className='skills'><u><b>Skills:</b></u> jQuery / JavaScript / HTML / CSS</p>
                <a href='https://github.com/LFuen/QuizApp'>Project Repo</a>                
                <br/>
                <div className='borderOne flexRow proj'>
                    <a href='https://lfuen.github.io/QuizApp/' target='_blank' rel='noreferrer'><img src='https://lfuen.github.io/portimages/question.png' alt='QuizApp'/></a>
                </div>



            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        );
    }
}


export default Projects