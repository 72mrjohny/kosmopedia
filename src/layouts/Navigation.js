import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";


const list = [
    { name: "start", path: "/", exact: true },
    { name: "kosmo-kompendium", path: "/cosmos" },
    { name: "kontakt", path: "/contact" },
    { name: "chat", path: "/chat" },
    { name: "panel admin", path: "/admin" },
]


const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={true ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;