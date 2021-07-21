// import logo from './../images/duck.png'
import './../css/App.css';
import {
  useParams
} from "react-router-dom";

/* Project#1 Page */
export default function Project1() {
  let { project1 } = useParams();
  return (
    <div className="App project1">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Our Projects
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Project #1
        </a>
      </header>
    </div>
  );
}
