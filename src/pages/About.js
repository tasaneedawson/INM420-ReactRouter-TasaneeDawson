import logo from './../images/duck.png'
import './../css/App.css';

export default function About() {
  return (
    <div className="App about">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        What's Up Duck?
      </p>
      <a className="App-link about-type" href="https://whatsupduck.me" target="_blank" rel="noopener noreferrer" >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      </a>
    </header>
  </div>
  );
}

