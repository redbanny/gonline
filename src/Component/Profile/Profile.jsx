import React from 'react';
import user from './Profile.module.css'
import photo from '../../img/ProfilePhoto.png'

const Profile = () => {
    return (
      <div className = {user.wrap}>
        <div className = {user.head}></div>
        <div className = {user.user}>
          <img src = {photo} className = {user.photo}/>
          <div className = {user.date}>
            <span className = {user.name}>Джин Джиджин</span>
            <span className = {user.location}>Москва, Россия</span>
            <div className = {user.follow}>
              <div className = {user.followers}>
                <span className = {user.followers_sum}>3455</span>
                <span className = {user.followers_f}>подписчиков</span>
              </div>
              <div className = {user.subscribe}>
                <span className = {user.followers_sum}>344</span>
                <span className = {user.followers_f}>подписок</span>
              </div>
            </div>  
            <div className = {user.button_place}>
              <button className = {user.button_follow}>ПОДПИСАТЬСЯ</button>
              <button className = {user.button_message}>отправить сообщение</button>
            </div>          
          </div>
        </div>
      </div>
  );
}

export default Profile;