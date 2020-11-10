import React from 'react';
import MenuItem from './MenuItem';
import menu from './ProfileMenu.module.css'
 
const ProfileMenu = () => {
    return (
        <div className = {menu.profile} tabindex="0">
            <div className = {menu.img}>
            </div>
            <button className={menu.arrow}><span><i class="fa fa-angle-down" aria-hidden="true"></i></span></button>
            <div className = {menu.menu}>
                <ul className={menu.list}>
                    <MenuItem title='Профиль' ico='far fa-user-circle' linc='/profile'/>
                    <MenuItem title='Настройки' ico='fas fa-cog' />
                    <MenuItem title='Справка' ico='far fa-question-circle' />
                    <MenuItem title='Выход'/>
                </ul>
            </div>
        </div> 
    );
}

export default ProfileMenu;