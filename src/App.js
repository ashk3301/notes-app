import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Sidebar from './Sidebar'; 
import Notepad from './Notepad' ;
function App() {
  return (
    <div className="App">
      <Sidebar className="Sidebar"/>
      {/* <Homepage className="Homepage"/> */}
      <Notepad className="Notepad"/>

      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
