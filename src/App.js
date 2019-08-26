import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Columns from "./components/Columns";

function App() {
  return (
    <div className="App">
	    <Navbar fontSize="30px" image="this is image 1"/>
	    <Landing/>


    </div>
  );
}

export default App;
