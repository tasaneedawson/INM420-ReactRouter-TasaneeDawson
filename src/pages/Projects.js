import logo from './../images/duck.png'
import './../css/App.css';

export default function Projects() {
  return (
    <div className="App projects">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Our Projects
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
        Project #1
      </a>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
        Project #2
      </a>
    </header>
  </div>
  );
}

