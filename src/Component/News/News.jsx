import React from 'react';
import news from './News.module.css'

const News = () => {
    return (
      <div className = {news.wrap}>
        <div className ={news.content}>
          <span className = {news.title}>
            новости
          </span>
          <span className = {news.row}></span>
          <div className = {news.descriptions}>
            <div className = {news.description}>
              <p className = {news.description_text}>
                Какой-то типа очень интересный текст про новости из мира инвестиций
              </p>
              <span className = {news.description_row}></span>
              <span className = {news.description_date}>2/9/20</span>
              <span className = {news.description_more}>Подробнее</span>
            </div>
            <div className={news.description}>
              <span className = {news.description_text}>
                Какой-то типа очень интересный текст про новости из мира инвестиций
              </span>
              <span className = {news.description_row}></span>
              <span className = {news.description_date}>2/9/20</span>
              <span className = {news.description_more}>Подробнее</span>
            </div>
            <div className={news.description}>
              <span className = {news.description_text}>
                Какой-то типа очень интересный текст про новости из мира инвестиций
              </span>
              <span className = {news.description_row}></span>
              <span className = {news.description_date}>2/9/20</span>
              <span className = {news.description_more}>Подробнее</span>
            </div>
            <div className={news.description}>
              <span className = {news.description_text}>
                Какой-то типа очень интересный текст про новости из мира инвестиций
              </span>
              <span className = {news.description_row}></span>
              <span className = {news.description_date}>2/9/20</span>
              <span className = {news.description_more}>Подробнее</span>
            </div>
          </div>
        </div>        
      </div>
  );
}

export default News;