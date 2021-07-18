import logo from './../images/duck.png'
import './../css/App.css';

export default function Home() {
  return (
    <div className="App home">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p class="home">
        Home
      </p>
      <a className="App-link" href="https://whatsupduck.me" target="_blank" rel="noopener noreferrer" >
        Welcome!
      </a>
    </header>
  </div>
  );
}

