import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { Menu, Sidebar, Icon, Image, Responsive } from 'semantic-ui-react'
import { MobileOnlyDiv, DesktopOnlyDiv } from '../components/styledComponents'

import blackLogo from '../images/logos/black_logo.svg'

function Nav({ siteTitle }) {
  const [visible, setVisible] = useState(false)

  const LinkedItem = ({ children, ...props }) => (
    <Menu.Item as={Link} activeClassName="active" {...props}>
      {children}
    </Menu.Item>
  )
  const fullMenu = () => (
    <div style={{ margin: '0 auto 1rem auto', maxWidth: '100rem' }}>
      <Menu secondary pointing fluid onItemClick={() => setVisible(false)}>
        <LinkedItem to="/">{siteTitle}</LinkedItem>
        <Menu.Menu position="right">
          <LinkedItem to="/about">About</LinkedItem>
          <LinkedItem to="/services">Services</LinkedItem>
          <LinkedItem to="/staff">Staff</LinkedItem>
          <LinkedItem to="/research">Research</LinkedItem>
          <LinkedItem to="/resources">Resources</LinkedItem>
          <LinkedItem to="/contact">Contact</LinkedItem>
        </Menu.Menu>
      </Menu>
    </div>
  )

  const mobileMenu = () => (
    <Menu>
      <Sidebar
        as={Menu}
        direction="right"
        animation="overlay"
        icon="labeled"
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
        onItemClick={() => setVisible(false)}
      >
        <Menu.Item onClick={() => setVisible(!visible)}>
          <Icon size="large" name="close" />
        </Menu.Item>

        <LinkedItem to="/about">About</LinkedItem>
        <LinkedItem to="/services">Services</LinkedItem>
        <LinkedItem to="/staff">Staff</LinkedItem>
        <LinkedItem to="/research">Research</LinkedItem>
        <LinkedItem to="/resources">Resources</LinkedItem>
        <LinkedItem to="/contact">Contact</LinkedItem>
      </Sidebar>

      <Menu borderless fixed="top">
        <Menu.Menu position="left">
          <Menu.Item onClick={() => navigate('/')}>
            {/* <h2>Still Waters</h2> */}
            <Image size="mini" src={blackLogo} />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item onClick={() => setVisible(!visible)}>
            <Icon size="large" name="bars" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Menu>
  )

  return (
    // <>
    //   <MobileOnlyDiv>{mobileMenu()}</MobileOnlyDiv>

    //   <DesktopOnlyDiv>{fullMenu()}</DesktopOnlyDiv>
    // </>
    <>
      <Responsive as={'div'} {...Responsive.onlyMobile}>
        {mobileMenu()}
      </Responsive>
      <Responsive as={'div'} {...Responsive.onlyTablet}>
        {mobileMenu()}
      </Responsive>
      <Responsive as={'div'} {...Responsive.onlyComputer}>
        {fullMenu()}
      </Responsive>
      {/* <Responsive as={'div'} {...Responsive.onlyLargeScreen}>
        {fullMenu()}
      </Responsive> */}
      {/* <Responsive as={'div'} {...Responsive.onlyWidescreen}>
        {fullMenu()}
      </Responsive> */}
    </>
  )
}

export default Nav
