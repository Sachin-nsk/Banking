import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  handleClick = () => {
    window.location.href = '/public/index.html'; // Change the path according to your file structure
  };
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello React</h1>
        <button onClick={this.handleClick}>Go to index.html</button>
      </header>
    </div>
  );
}
}

export default App;
