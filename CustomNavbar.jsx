import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

const CustomNavbar =(args)=> {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
      return (
        
        <div>
        <Navbar {...args} color ="dark" dark expand ="md" fixed=''>
          <NavbarBrand tag={ReactLink} to="/">Employee App</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink tag={ReactLink} to="/about" >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/signup">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/login">
                  Login
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag={ReactLink} to="/employee">Employee</DropdownItem>
                  <DropdownItem tag={ReactLink} to="/manager">Product Manager</DropdownItem>
                  <DropdownItem tag={ReactLink} to="/admin" >Admin</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      );

};

export default CustomNavbar;