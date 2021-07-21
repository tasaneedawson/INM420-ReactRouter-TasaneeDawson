import logo from './../../images/duck.png'
import './../../css/App.css';

/* Project#2 Page */
export default function Projects() {
  return (
    <div className="App project2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://whatsupduck.me" target="_blank" rel="noopener noreferrer" >
          Project 2
        </a>
        <p className="project-fs">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
        </p>
      </header>
    </div>
  );
}
