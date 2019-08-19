import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ColumnLinks from "./components/ColumnLinks";

function App() {
  return (
    <div className="App">
	    <Navbar fontSize="30px" image="this is image 1"/>
	    <Landing/>
	    <ColumnLinks/>
    </div>
  );
}

export default App;
