import React, {useState} from 'react'
import { Route, BrowserRouter, NavLink, Switch } from 'react-router-dom'
import './Nav.css'
import Welcome from '../Welcome/Welcome'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Inquiries from '../Inquiries/Inquiries'


    function Nav() {

        const [click, setClick] = useState(false);

        const handleClick = () => setClick(!click);
        const closeMenu = () => setClick(false);

        return(
            <div>
                <nav className="navbar navigation topnav">
                    <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/Work" className="nav-links link" onClick={closeMenu}>
                            Welcome
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/About" className="nav-links link" onClick={closeMenu}>
                            About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Projects" className="nav-links link" onClick={closeMenu}>
                            Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contact" className="nav-links link" onClick={closeMenu}>
                            Contact
                            </NavLink>
                        </li>
                            <li className="nav-item">
                            <NavLink to="/Inquiries" className="nav-links link" onClick={closeMenu}>
                            Inquiries
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/Work' component={Welcome}/>
                    <Route exact path='/About' component={About}/>
                    <Route exact path='/Projects' component={Projects}/>
                    <Route exact path='/Contact' component={Contact}/>
                    <Route exact path='/Inquiries' component={Inquiries}/>
                </Switch>
            </div>    
        )
}


export default Nav

