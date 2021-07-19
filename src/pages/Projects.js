import logo from './../images/duck.png'
import './../css/App.css';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  // useParams
} from "react-router-dom";
import Project1 from './Project1';
import Project2 from './Project2';

export default function Projects() {
  let match = useRouteMatch();
  return (
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
      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}./project1`}>
          <Project1 />
        </Route>
        <Route path={`${match.path}./project2`}>
          <Project2 />
        </Route>
        <Route path={match.path}>
          <h3>Please select a project.</h3>
        </Route>
      </Switch>
    </div>
  );
}

