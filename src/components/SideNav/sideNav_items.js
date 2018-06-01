import React from 'react';
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import './sideNav_items.css'
const SideNavItems = () => {
    const items = [
        {
            type: "sidenav-item",
            icon: "home",
            text: "Home",
            link: "/"
        },
        {
            type: "sidenav-item",
            icon: "file-text-o",
            text: "News",
            link: "/news"
        },
        {
            type: "sidenav-item",
            icon: "play",
            text: "Video",
            link: "/video"
        },
        {
            type: "sidenav-item",
            icon: "sign-in",
            text: "Login",
            link: "/login"
        },
        {
            type: "sidenav-item",
            icon: "sign-out",
            text: "Logout",
            link: "/logout"
        },
    ]
    const showItems = () => {
        return items.map( (item, i) => {
            return(
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text} 
                    </Link>
                </div>
            )
        })
    }
    return(
       <div>
           {showItems()}
       </div>
    )
}
export default SideNavItems;