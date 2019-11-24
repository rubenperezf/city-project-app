import React from 'react';
import './App.css';
import Axios from "./components/Axios"
import Form from "./components/Form"
import WriteCountry from './components/WriteCountry'


function App() {
  return (
    <div className="App">
      <header><h1>Cities of the World</h1></header>
      
      <Form />
      <WriteCountry />
    </div>
  );
}

export default App;
