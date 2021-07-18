import logo from './../images/duck.png'
import './../css/App.css';

export default function Contact() {
  return (
    <div className="App contact">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Contact Us.
      </p>
      <a className="App-link" href="https://whatsupduck.me" target="_blank" rel="noopener noreferrer" >
        whatsupduck.me
      </a>
      <a className="App-link" href="https://whatsupduck.me" target="_blank" rel="noopener noreferrer" >
        info@whatsupduck.me
      </a>
    </header>
  </div>
  );
}

