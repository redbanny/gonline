import React from 'react';
import SimpleSlider from './Slider/Slider';

const Topproject = () => {
    return (
      <div className = 'wrapper'>
        <h2>Лучшие проeкты</h2>
        <span className = 'line'></span>
        <div className = 'wrapper__top'>
          <SimpleSlider />  
        </div>
    </div>
  );
}

export default Topproject;