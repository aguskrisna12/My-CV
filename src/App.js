// import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import NewsApi from  './Apps/News-API';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <div>
          <nav>
            <ul className="d-flex justify-content-end navbar">
              <li>
                <Link to="/"> <i className="bi bi-house-door-fill p-3" style={{fontSize:"1.5rem"}}></i></Link>
                <Link to="/resume"><i className="bi bi-file-earmark-person-fill p-3" style={{fontSize:"1.5rem"}}></i></Link>
                <Link to="/project"><i className="bi bi-person-workspace p-3" style={{fontSize:"1.5rem"}}></i></Link>
                <Link to="/contact"><i className="bi bi-person-lines-fill p-3 me-4" style={{fontSize:"1.5rem"}}></i></Link>
              </li>
            </ul>
          </nav>   
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/resume"> 
            <Resume />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/newsapi">
            <NewsApi />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

