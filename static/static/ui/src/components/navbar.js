import React from "react";
import { Nav, NavLink, NavMenu }
from "./NavbarElements";

const Navbar = () => {
return (
<>
    <Nav>
        <NavMenu>
            < NavLink to = "/home"
            activeStyle = {
                {
                    color: 'red'
                }
            } >
                Home
            </NavLink>
            < NavLink to = "/route"
            activeStyle = {
                {
                    color: 'red'
                }
            } >
                Add Route
            </NavLink>
            {/* <NavLink to="/blogs" activeStyle>
                Blogs
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
                Sign Up
            </NavLink> */}
        </NavMenu>
    </Nav>
</>
);
};

export default Navbar;