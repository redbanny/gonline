import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Slide = (props) => {
    return (
      <div>
        <div className = 'top__block'>
          <div className = 'project__logo'></div>
          <span className = 'project__title'>Bicycle shop</span>
          <span className = 'project__city'>{props.city}</span>
          <span className = 'project__description'>
            {props.text}
          </span>
          <NavLink to='/profile' className='more'><span>Подробнее</span></NavLink>
        </div>
      </div>
    );
}

export default Slide;