import React from 'react';
 
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
          <a href='#' className = 'more'><span>Подробнее</span></a>
        </div>
      </div>
    );
}

export default Slide;