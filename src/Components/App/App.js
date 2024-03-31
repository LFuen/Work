import React, {Component} from 'react'
import './App.css'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'


class App extends Component{
  render(){
    return (
      <div>
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;


