import React from 'react';
import menu from './ProfileMenu.module.css'
 
const ProfileMenu = () => {
    return (
        <div className = {menu.profile} tabindex="0">
            <div className = {menu.img}>
            </div>
            <button className={menu.arrow}><span><i class="fa fa-angle-down" aria-hidden="true"></i></span></button>
            <div className = {menu.menu}>
                <ul className={menu.list}>
                    <a><li className={menu.item}>Профиль</li></a>
                    <a><li className={menu.item}>Сообщества</li></a>
                    <a><li className={menu.item}>Мои проекты</li></a>
                </ul>
            </div>
        </div> 
    );
}

export default ProfileMenu;