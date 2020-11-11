import React from 'react';
import { NavLink } from 'react-router-dom';
import faq from './FAQ.module.css'
import questions from './Questions.module.css'
import contest from './Сontest.module.css'

const FAQ = () => {
    return (
      <div className = {faq.wrapper}>
        <div className = {faq.news}>
          <div className={faq.title}>
            <span>Теги новостей</span>
            <div className={faq.item}>
              <div className = {faq.img}></div>
              <span className={faq.name}>Открытие бизнеса</span>
              <span className={faq.value}>1 103 вопроса</span>
            </div>
            <div className={faq.item}>
              <div className = {faq.img}></div>
              <span className={faq.name}>Продажи</span>
              <span className={faq.value}>1 103 вопроса</span>
            </div>
            <div className={faq.item}>
              <div className = {faq.img}></div>
              <span className={faq.name}>Инвестиции</span>
              <span className={faq.value}>1 103 вопроса</span>
            </div>
            <div className={faq.item}>
              <div className = {faq.img}></div>
              <span className={faq.name}>Реклама</span>
              <span className={faq.value}>1 103 вопроса</span>
            </div>
          </div>
          <NavLink to='/profile' className={faq.link}>
            <span>Все темы</span>
          </NavLink>
        </div>
        <div className = {questions.question}>
          <div className = {questions.item}>
            <span>Здравствуйте хотел узнать почему мой чайник не кипит? Как исправить ситуацию и узнать проблему?</span>
            <i class="far fa-comment-alt"></i>
            <button className={questions.btn}>Ответить</button>
          </div>
          <div className = {questions.item}>
            <span>Здравствуйте хотел узнать почему мой чайник не кипит? Как исправить ситуацию и узнать проблему?</span>
            <i class="far fa-comment-alt"></i>
            <button className={questions.btn}>Ответить</button>
          </div>
          <div className = {questions.item}>
            <span>Здравствуйте хотел узнать почему мой чайник не кипит? Как исправить ситуацию и узнать проблему?</span>
            <i class="far fa-comment-alt"></i>
            <button className={questions.btn}>Ответить</button>
          </div>
          <span className ={questions.all}>все вопросы</span>
        </div>
        <div className = {contest.contest}>
          <span className = {contest.title}>
            Инвест конкурс
          </span>
          <div className = {contest.wrap}>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
            <div className={contest.contest_img}></div>
          </div>
        </div>
    </div>
  );
}

export default FAQ;