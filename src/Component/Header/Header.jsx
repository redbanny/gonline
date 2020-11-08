import React from 'react';
import header from './Header.module.css';
import ProfileMenu from './Menu/ProfileMenu';
 
const Header = () => {
    return (
        <header className = {header.header}>
          <div className = {header.navigation}>
            <div className= {header.logo}></div>
            <div className = {header.search}>
              <input className= {header.search_input}></input>
            </div>
            <div className = {header.nav}>
              <ul className={header.nav_list}>
                <li className={header.nav_item}>Проекты</li>
                <li className={header.nav_item}>Инвесторы</li>
                <li className={header.nav_item}>Сообщества </li>
              </ul>
            </div>
            <div className = {header.header_profile}>
              <ProfileMenu />
              <div className = {header.lang}>
                <span>ru</span>
              </div>             
            </div>
          </div>
        </header>
    );
}

export default Header;