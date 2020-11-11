import React from 'react';
import { NavLink } from 'react-router-dom';
import header from './Header.module.css';
import ProfileMenu from './Menu/ProfileMenu';
 
const Header = () => {
    return (
        <header className = {header.header}>
          <div className = {header.navigation}>
            <NavLink to='/gonline'> <div className= {header.logo}></div> </NavLink>
            <div className = {header.search}>
              <input className= {header.search_input}></input>
            </div>
            <div className = {header.nav}>
              <ul className={header.nav_list}>
                <NavLink to= '/profile' className={header.nav_item}>
                  <li>Проекты</li>
                </NavLink>
                <NavLink to= '/profile' className={header.nav_item}>
                  <li>Инвесторы</li>
                </NavLink>
                <NavLink to= '/profile' className={header.nav_item}>
                  <li>Сообщества</li>
                </NavLink>
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