import logo from './../images/duck.png'
import './../css/App.css';

/* Home page */
export default function Home() {
  return (
    <div className="App home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="home-p">
          Home
        </p>
        <a className="App-link" href="https://whatsupduck.me" target="_blank" rel="noopener noreferrer" >
          Welcome to What's Up Duck!!
        </a>
      </header>
    </div>
  );
}

