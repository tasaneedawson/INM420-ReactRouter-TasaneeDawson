import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
              {/* <a href="">something</a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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


// function Home() {
//   return <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Home Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
//         Learn React
//       </a>
//     </header>
//   </div>;
// }

// function About() {
//   return <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         About Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
//         Learn React
//       </a>
//     </header>
//   </div>;
// }

// function Users() {
//   return <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Users Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
//         Learn React
//       </a>
//     </header>
//   </div>;
// }


