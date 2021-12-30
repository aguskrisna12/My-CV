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
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let time = new Date().toLocaleDateString("en-US", options);

  const [ctime,setCtime] = useState(time);
  const [cdate,setCdate] = useState(time);

  const UpdateDate = () => {
    time = new Date().toLocaleDateString("en-US", options);
    setCdate(time)
  }
  setInterval(UpdateDate)

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time)
  }
  setInterval(UpdateTime,1000);

  return (
    <div className="App">
       <Router>
      <div>
        <div>
          <nav>
            <ul className="d-flex justify-content-end navbar pt-4 pe-3">
              <li>
                <div>
                  <div className='d-flex justify-content-end px-3 me-3'>
                    <h5>{cdate}</h5>
                  </div>
                  <>{ctime}</>
                  <Link className='px-1 px-md-3 text-decoration-none' to="/">Home</Link>
                  <Link className='px-1 px-md-3 text-decoration-none'  to="/resume">Resume</Link>
                  <Link className='px-1 px-md-3 text-decoration-none' to="/project">Project</Link>
                  <Link className='px-1 px-md-3 text-decoration-none me-3' to="/contact">Contact</Link>
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

