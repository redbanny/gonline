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
                    <MenuItem title='Профиль'/>
                    <MenuItem title='Профиль'/>
                    <MenuItem title='Профиль'/>
                </ul>
            </div>
        </div> 
    );
}

export default ProfileMenu;