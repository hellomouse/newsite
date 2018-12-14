import React from 'react';
import Link from 'next/link';

import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class HMNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Navbar color="light" light expand="md">
        <Link href="/"><NavbarBrand><img src="https://git.hellomouse.net/img/gitea-sm.png" style={{ maxHeight: '40px' }}/> {'Hellomouse'}</NavbarBrand></Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/"><NavLink>{'Home'}</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link href="/projects"><NavLink>{'Projects'}</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link href="/members"><NavLink>{'Members'}</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
