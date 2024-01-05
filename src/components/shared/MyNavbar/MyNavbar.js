import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './MyNavbar.scss';
import logo from '../../../photos/JBfitnesslogo.jpg';

class MyNavbar extends React.Component {
  state = {
    isOpen: true,
    logo: [],
    isClosed: false,
    // CSSTransitionMenu: [],
    // Item: [],
    // };
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
                    <div className="MyNavbar">
                    <Navbar expand="lg">
                     <NavbarToggler onClick={this.toggle} />
                     <Collapse isOpen={isOpen} navbar>
                        <Nav className="navbar ml-auto navbar-collapse">
                       <NavItem>
                        <NavLink className="navbar-links" tag={RRNavLink} to='/home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="navbar-links" tag={RRNavLink} to='/aboutUs'>About</NavLink>
                        </NavItem>
                        <img className="home-title"to="/home" src={logo} alt="logo"></img>
                        <NavItem>
                           <NavLink className="navbar-links" tag={RRNavLink} to='/products'>Ebooks</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="navbar-links" tag={RRNavLink} to='/contactUs'>Contact</NavLink>
                        </NavItem>
                      </Nav>
                     </Collapse>
                </Navbar>
            </div>
    );
  }
}

export default MyNavbar;
