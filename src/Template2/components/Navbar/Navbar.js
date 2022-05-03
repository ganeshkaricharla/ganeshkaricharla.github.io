import React from 'react';
import './Navbar.css'
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        // const { location } = this.props;
        // const homeclass = location.pathname === '/' ? 'active-item' : '';
        // const aboutclass = location.pathname === '/about' ? 'active-item' : '';
        // const projectsclass = location.pathname === '/projects' ? 'active-item' : '';
        // const skillsclass = location.pathname === '/skills' ? 'active-item' : '';
        // const contactsclass = location.pathname === '/contacts' ? 'active-item' : '';

        return (
            <div>


                <Menu>
                    {/*We Never use <a> in react router application*/}
                    <Link to='/' className={`menu-item active-item`} >Home</Link>
                    <Link to='/about' className={`menu-item active-item`}  >About</Link>
                    <Link to='/projects' className={`menu-item active-item`}  >Projects</Link>
                    <Link to='/skills' className={`menu-item active-item`} >Skills</Link>
                    <Link to='/contacts' className={`menu-item active-item`}  >Contact Me</Link>

                </Menu>

            </div>
        );
    };
};
export default Navbar;