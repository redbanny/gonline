import React from 'react';

const Header = () => {
    return (
        <header className = 'header'>
          <div className = 'header__navigation'>
            <div className= 'header__logo'></div>
            <div className = 'header__search'>
              <input className= 'search'></input>
            </div>
            <div className = 'header__nav'>
              <ul className='nav'>
                <li className='nav__item'>Проекты</li>
                <li className='nav__item'>Инвесторы</li>
                <li className='nav__item'>Сообщества </li>
              </ul>
            </div>
            <div className = 'header__profile'>
              <div className = 'profile' tabindex="0">
                <div className = 'img'>
                </div>
                <button className='arrow'><span><i class="fa fa-angle-down" aria-hidden="true"></i></span></button>
                <div className = 'profile__menu'>
                  <ul>
                    <a><li>Профиль</li></a>
                    <a><li>Сообщества</li></a>
                    <a><li>Мои проекты</li></a>
                  </ul>
                </div>
              </div> 
              <div className = 'lang'>
                <span>ru</span>
              </div>             
            </div>
          </div>
        </header>
    );
}

export default Header;