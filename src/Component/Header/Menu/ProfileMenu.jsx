import React from 'react';
import NavigationItems from './MenuItem';
import menu from './ProfileMenu.module.css'
 
const ProfileMenu = () => {
    return (
        <div className = {menu.profile} >
            <div className = {menu.img}>
            </div>
            <button className={menu.arrow}><span><i class="fa fa-angle-down" aria-hidden="true"></i></span></button>
            <div className = {menu.menu}>
                <ul className={menu.list}>
                    <NavigationItems title='Профиль' ico='far fa-user-circle' linc='/profile' />
                    <NavigationItems title='Настройки' ico='fas fa-cog' linc='/settings'/>
                    <NavigationItems title='Справка' ico='far fa-question-circle' linc='/question'/>
                    <NavigationItems title='Выход' linc='/logout'/>
                </ul>
            </div>
        </div> 
    );
}

export default ProfileMenu;