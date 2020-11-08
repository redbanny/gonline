import React from 'react';
import menu from './ProfileMenu.module.css'
 
const MenuItem = (props) => {
    return (        
        <a><li className={menu.item}>{props.title}</li></a>           
    );
}

export default MenuItem;