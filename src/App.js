import './App.css';
import React from 'react';
import Header from './Component/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import StartPage from './Component/Main/StartPage';
import Profile from './Component/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter >
      <div className='App'>
        <Header />
        <div className = 'content'>
          <Route path='/gonline' render={()=><StartPage/>} />
          <Route path='/profile' render={()=><Profile/>} />
        </div>                
      </div>
    </BrowserRouter>
  );
}

export default App;
