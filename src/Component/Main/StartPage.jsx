import React from 'react';
import Toproject from '../Toproject'
import FAQ from '../FAQ'
import News from '../News/News'
import Public from '../TopPublic/Public'

const StartPage = () => {
    return (
      <div>
        <Toproject />
        <FAQ />
        <News />
        <Public />
      </div>
  );
}

export default StartPage;