import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';  
import { Switch, Route } from 'react-router-dom';
import home from './Components/Pages/home'
import Index from './Components/Pages/Index'
import MoviesList from './posts/MoviesList'
import SeriesList from './posts/SeriesList'
import notfound from './Components/Pages/notfound'
import login from './Components/Pages/login'

class App extends Component{
  render() {
    return (
      <div>
      <h1>Welcome to Home page...</h1>
      	<Navbar/>
      	<Switch>
          <Route exact path="/" component={Index} />
          <Route path="/home" component={home} />
          <Route path="/MoviesList" component={MoviesList} />
          <Route path="/SeriesList" component={SeriesList} />
          <Route path="/not-found-page" component={notfound} />
          <Route path="/login" component={login} />
          </Switch>
      	<Footer />
      </div>
      );
  }
}

export default App;
