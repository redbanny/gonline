import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";

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
          <Slide 
            city = 'Москва'
            text = 'Какой-то типа очень интересный текст про проект. Какое-то длинное описание. Очень интересный проект. Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!'
          />
          <Slide 
            city = 'Санкт-Питербург'
            text = 'Какой-то типа очень похожий текст про проект. Какое-то длинное описание. Очень интересный проект. Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!'
          />
          <Slide 
            city = 'Москва'
            text = 'Какой-то типа очень интересный текст про проект. Какое-то длинное описание. Очень интересный проект. Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!'
          />
          <Slide 
            city = 'Санкт-Питербург'
            text = 'Какой-то типа очень похожий текст про проект. Какое-то длинное описание. Очень интересный проект. Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!'
          />
          <Slide
            city = 'Москва' 
            text = 'Какой-то типа очень интересный текст про проект. Какое-то длинное описание. Очень интересный проект. Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!'
          />
          <Slide 
            city = 'Санкт-Питербург'
            text = 'Какой-то типа очень похожий текст про проект. Какое-то длинное описание. Очень интересный проект. Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!'
          />
          <Slide 
            city = 'Москва'
            text = 'Какой-то типа очень интересный текст про проект. Какое-то длинное описание. Очень интересный проект. Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!'
          />
          <Slide 
            city = 'Санкт-Питербург'
            text = 'Какой-то типа очень похожий текст про проект. Какое-то длинное описание. Очень интересный проект. Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!'
          />
          <Slide 
            city = 'Москва'
            text = 'Какой-то типа очень похожий текст про проект. Какое-то длинное описание. Очень интересный проект. Посмотрите на меня, пожалуйста! Я оченб классный проект, инвистируйте в меня!'
          />
        </Slider>
      </div>
    );
  }
}