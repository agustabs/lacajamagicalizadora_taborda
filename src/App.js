import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to <b>la caja magicalizadora</b> project
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/lacajamagicalizadora/"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn more
        </a>
      </header>
    </div>
  );
}

export default App;
