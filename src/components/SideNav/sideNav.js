import React from 'react';
import SideNav from 'react-simple-sidenav';
const SideNavigation = (props) => {
    return(
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background:'#212121',
                    maxWidth:'220px'
                }}
            >
            asdf asdf 
            </SideNav>
        </div>
    )
}
export default SideNavigation;