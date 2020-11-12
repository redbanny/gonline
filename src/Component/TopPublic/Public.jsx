import React from 'react';
import pub from './Public.module.css'
import people from '../../img/Ellipse2.png'

const Public = () => {
    return (
      <div className = {pub.wrap}>
        <div className = {pub.content}>
          <div className = {pub.top}>
            <div className = {pub.title_wrap}>
              <span className = {pub.title}>
                Топ пабликов
              </span>
              <span className = {pub.more}>все паблики</span>
            </div>
            <div className = {pub.top_wrap}>
              <div className = {pub.description}>
                <img src={people} className = {pub.img} />
                <div className = {pub.description_text}>
                  <span className = {pub.name}>Мдэм</span>
                  <span className ={pub.category}>Строительство</span>
                  <span className = {pub.value}>19836 участников</span>
                </div>
                <span className = {pub.row}></span>
              </div>
              <div className = {pub.description}>
                <img src={people} className = {pub.img} />
                <div className = {pub.description_text}>
                  <span className = {pub.name}>Мдэм</span>
                  <span className ={pub.category}>Строительство</span>
                  <span className = {pub.value}>19836 участников</span>
                </div>
                <span className = {pub.row}></span>
              </div>
              <div className = {pub.description}>
                <img src={people} className = {pub.img} />
                <div className = {pub.description_text}>
                  <span className = {pub.name}>Мдэм</span>
                  <span className ={pub.category}>Строительство</span>
                  <span className = {pub.value}>19836 участников</span>
                </div>
              </div>
            </div>
          </div>
          <div className = {pub.decimal}>
            <div className = {pub.decimal_val}>
              <div className = {pub.cercly}>
                <i class="fas fa-coins"></i>
              </div>
              <div className = {pub.decimal_sum}>
                <span className = {pub.sum}>38 376</span>
                <span className = {pub.sum_category}>привлечено инвестиций</span>
              </div>
            </div>
            <div className ={pub.decimal_val}>
              <div className = {pub.cercly}>
              <i class="fas fa-user"></i>
                </div>
                <div className = {pub.decimal_sum}>
                  <span className = {pub.sum}>3 988</span>
                  <span className = {pub.sum_category}>пользователей на сайте</span>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Public;