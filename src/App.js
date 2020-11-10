import './App.css';
import React from 'react';
import Header from './Component/Header/Header';
import Topproject from './Component/Toproject';
import FAQ from './Component/FAQ'
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter >
      <div className='App'>
        <Header />
        <Topproject />
        <FAQ />
      </div>
    </BrowserRouter>
  );
}

export default App;
