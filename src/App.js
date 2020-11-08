import './App.css';
import React from 'react';
import Header from './Component/Header';
import Topproject from './Component/Toproject';
import FAQ from './Component/FAQ'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Topproject />
      <FAQ />
    </div>
  );
}

export default App;
