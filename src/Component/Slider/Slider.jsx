import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className='slider'>
        <Slider {...settings}>
          <div>
            <div className = 'top__block'>
              <div className = 'project__logo'></div>
              <span className = 'project__title'>Bicycle shop</span>
              <span className = 'project__city'>Москва</span>
              <span className = 'project__description'>
                Какой-то типа очень интересный текст про проект. 
                Какое-то длинное описание. Очень интересный проект. 
                Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!
              </span>
              <a href='#' className = 'more'><span>Подробнее</span></a>
            </div>
          </div>
          <div >
            <div className = 'top__block'>
              <div className = 'project__logo'></div>
              <span className = 'project__title'>Bicycle shop</span>
              <span className = 'project__city'>Москва</span>
              <span className = 'project__description'>
                Какой-то типа очень интересный текст про проект. 
                Какое-то длинное описание. Очень интересный проект. 
                Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!
              </span>
              <a href='#' className = 'more'><span>Подробнее</span></a>
            </div> 
          </div>
          <div >
            <div className = 'top__block'>
              <div className = 'project__logo'></div>
              <span className = 'project__title'>Bicycle shop</span>
              <span className = 'project__city'>Москва</span>
              <span className = 'project__description'>
                Какой-то типа очень интересный текст про проект. 
                Какое-то длинное описание. Очень интересный проект. 
                Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!
              </span>
              <a href='#' className = 'more'><span>Подробнее</span></a>
            </div>  
          </div>
          <div >
            <div className = 'top__block'>
              <div className = 'project__logo'></div>
              <span className = 'project__title'>Bicycle shop</span>
              <span className = 'project__city'>Москва</span>
              <span className = 'project__description'>
                Какой-то типа очень интересный текст про проект. 
                Какое-то длинное описание. Очень интересный проект. 
                Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!
              </span>
              <a href='#' className = 'more'><span>Подробнее</span></a>
            </div>
          </div>
          <div className='slide_wrap'> 
            <div className = 'top__block'>
              <div className = 'project__logo'></div>
              <span className = 'project__title'>Bicycle shop</span>
              <span className = 'project__city'>Москва</span>
              <span className = 'project__description'>
                Какой-то типа очень интересный текст про проект. 
                Какое-то длинное описание. Очень интересный проект. 
                Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!
              </span>
              <a href='#' className = 'more'><span >Подробнее</span></a>
            </div>
          </div>
          <div className='slide_wrap'>
            <div className = 'top__block'>
              <div className = 'project__logo'></div>
              <span className = 'project__title'>Bicycle shop</span>
              <span className = 'project__city'>Москва</span>
              <span className = 'project__description'>
                Какой-то типа очень интересный текст про проект. 
                Какое-то длинное описание. Очень интересный проект. 
                Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!
              </span>
              <a href='#' className = 'more'><span>Подробнее</span></a>
            </div>
          </div>
          <div className='slide_wrap'>
            <div className = 'top__block'>
              <div className = 'project__logo'></div>
              <span className = 'project__title'>Bicycle shop</span>
              <span className = 'project__city'>Москва</span>
              <span className = 'project__description'>
                Какой-то типа очень интересный текст про проект. 
                Какое-то длинное описание. Очень интересный проект. 
                Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!
              </span>
              <a href='#' className = 'more'><span>Подробнее</span></a>
            </div>
          </div>
          <div className='slide_wrap'>
            <div className = 'top__block'>
              <div className = 'project__logo'></div>
              <span className = 'project__title'>Bicycle shop</span>
              <span className = 'project__city'>Москва</span>
              <span className = 'project__description'>
                Какой-то типа очень интересный текст про проект. 
                Какое-то длинное описание. Очень интересный проект. 
                Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!
              </span>
              <a href='#' className = 'more'><span>Подробнее</span></a>
            </div>
          </div>
          <div className='slide_wrap'>
            <div className = 'top__block'>
              <div className = 'project__logo'></div>
              <span className = 'project__title'>Bicycle shop</span>
              <span className = 'project__city'>Москва</span>
              <span className = 'project__description'>
                Какой-то типа очень интересный текст про проект. 
                Какое-то длинное описание. Очень интересный проект. 
                Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!
              </span>
              <a href='#' className = 'more'><span>Подробнее</span></a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}