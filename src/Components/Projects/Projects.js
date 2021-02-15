import React, {Component} from 'react'
import './Projects.css'


class Projects extends Component{
    render(){
        return (
        <div className='projects'>
            <h1 className='flexRow margin' id='Projects'>Projects</h1>
            <div className='flexColumn'>
                <h2>Bookmark Saver</h2>
                <p className='describe'>This app lets you save all your bookmarks in one place. Filter by your rating and edit at a later time.
                    This app was created as a project to show the efficient use of jQuery and JavaScript.</p>
                    <p className='skills'><u><b>Skills:</b></u> JavaScript / jQuery / Node / HTML / CSS</p>
                <a href='https://github.com/thinkful-ei-tiger/Fuentes-bookmarks-app' target='_blank' rel='noreferrer'>Project Repo</a>                
                <br/>
                <div className='borderOne flexRow proj'>
                    <a href='https://thinkful-ei-tiger.github.io/Fuentes-bookmarks-app/' target='_blank' rel='noreferrer'><img src='https://lfuen.github.io/portimages/ProjectBook.gif' alt='BookmarkApp'/></a>
                </div>

                <br/>
                <br/>
                <h2>La Carte</h2>
                <p className='describe'>La Carte is a healthy meal-ordering app, catered figuratively and quite <em>literally</em> to the ever-working individual.
                This app was created to show proficiency in React and JavaScript, along with CRUD functionality and the use of databases.</p>
                <p className='skills'><u><b>Skills:</b></u> React / PostgreSQL / JavaScript / Node / CSS</p>
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