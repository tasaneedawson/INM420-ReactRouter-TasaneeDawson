import logo from './../images/duck.png'
import './../css/App.css';

export default function Projects() {
  return (
    <div className="App projects">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Projects Component <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
        Learn React
      </a>
    </header>
  </div>
  );
}

