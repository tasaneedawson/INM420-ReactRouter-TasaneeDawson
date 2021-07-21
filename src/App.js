import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
/* Pages : 4 main pages */
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about" activeClassName="current">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="current">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="current">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
            {/* about page */}
          </Route>
          <Route path="/contact">
            <Contact />
            {/* contact page */}
          </Route>
          <Route path="/projects">
            <Projects />
            {/* projects page */}
          </Route>
          <Route path="/">
            <Home />
            {/* home page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


