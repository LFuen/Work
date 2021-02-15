import React, {Component} from 'react'
import { Route, BrowserRouter, NavLink } from 'react-router-dom'
import './Nav.css'
import Welcome from '../Welcome/Welcome'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Inquiries from '../Inquiries/Inquiries'


class Nav extends Component{
    render(){
        return(
            <BrowserRouter>
                <nav className='navigation topnav'>
                    <NavLink className='link' to='/Portfolio'>Welcome</NavLink>
                    <NavLink className='link' to='/About'>About</NavLink>
                    <NavLink className='link' to='/Projects'>Projects</NavLink>
                    <NavLink className='link' to='/Contact'>Contact</NavLink>
                    <NavLink className='link' to='/Inquiries'>Inquiries</NavLink>
                </nav>
                <Route exact path='/Portfolio' component={Welcome}/>
                <Route exact path='/About' component={About}/>
                <Route exact path='/Projects' component={Projects}/>
                <Route exact path='/Contact' component={Contact}/>
                <Route exact path='/Inquiries' component={Inquiries}/>
            </BrowserRouter>
        )
    }
}


export default Nav