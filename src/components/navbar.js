import React from 'react';

import NavbarItem from '../components/navbar-item';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="navbar-list">
          <NavbarItem hashLink="#intro" label="Intro"/>
          <NavbarItem hashLink="#about" label="About"/>
          <NavbarItem hashLink="#work" label="Work"/>
          <NavbarItem hashLink="#skills" label="Skills"/>
          <NavbarItem hashLink="#interests" label="Interests"/>
        </ul>
      </div>
    )
  }
}