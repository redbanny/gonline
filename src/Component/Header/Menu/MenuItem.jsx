import React from 'react';
import { NavLink } from 'react-router-dom';
import menu from './ProfileMenu.module.css'
 
const MenuItem = (props) => {
    return (        
        // <a className={menu.link}>
        //     <i class={props.ico}></i>
        //     <li className={menu.item}>{props.title}</li>
        // </a> 
        <NavLink to={props.linc} className={menu.link} tabIndex={props.index}>
            <i class={props.ico}></i>
            <li className={menu.item}>{props.title}</li>
        </NavLink>          
    );
}

export default MenuItem;