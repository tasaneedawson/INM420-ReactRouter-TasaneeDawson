import logo from './../images/duck.png'
import './../css/App.css';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';

/* Projects Main Page */
export default function Projects() {
  let match = useRouteMatch();
  return (
      <Switch>
        <Route path={`${match.path}/project1`}>
          <Project1 />
        </Route>
        <Route path={`${match.path}/project2`}>
          <Project2 />
        </Route>
        <Route path={match.path}>
        <div className="App projects">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Our Projects
            </p>
            <ul>
              <li>
                <Link to={`${match.url}/project1`}>Project#1</Link>
              </li>
              <li>
                <Link to={`${match.url}/project2`}>Project#2</Link>
              </li>
            </ul>
          </header>
        </div>
        </Route>
      </Switch>
  );
}

