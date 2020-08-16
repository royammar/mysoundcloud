import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../src/pages/Home'
import './styles/global.scss';  
import NavBar from './cmps/NavBar';
import Footer from './cmps/Footer';


const history = createBrowserHistory();
function App() {


  return (
    <Router history={history}>
    <NavBar></NavBar>
    <Switch>
      <Route path="/" component={Home} exact></Route>
    </Switch>
    <Footer></Footer>
  </Router>
  );
}

export default App;
