import logo from './../images/duck.png'
import './../css/App.css';
import {
  useParams
} from "react-router-dom";

export default function Projects() {
  let { project2 } = useParams();
  return (
    // <h3>Request project ID: {project2}</h3>
    <div className="App project2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Our Projects
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Project #2
        </a>
      </header>
    </div>
  );
}
