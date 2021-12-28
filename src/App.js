// import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import NewsApi from  './Apps/News-API';
import TodoList from './Apps/Todo-List';
import MemoryGame from './Apps/Memory-Game';
import Counter from './Apps/Counter/index'

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
            <ul className="d-flex justify-content-end navbar pt-4 pe-3">
              <li>
                <div>
                  <Link className='px-3 text-decoration-none' to="/">Home</Link>
                  <Link className='px-3 text-decoration-none'  to="/resume">Resume</Link>
                  <Link className='px-3 text-decoration-none' to="/project">Project</Link>
                  <Link className='px-3 text-decoration-none me-3' to="/contact">Contact</Link>
                </div>
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
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route path="/game">
            <MemoryGame />
          </Route>
          <Route path="/counter">
            <Counter />
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

