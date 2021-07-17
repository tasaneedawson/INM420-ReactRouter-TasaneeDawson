import logo from './../images/logo.svg';
import './../css/App.css';

export default function Contact() {
  return (
    <div className="App contact">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Contact Component <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
        Learn React
      </a>
    </header>
  </div>
  );
}

