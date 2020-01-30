import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { Menu, Sidebar, Icon, Image } from 'semantic-ui-react'

import blackLogo from '../images/logos/black_logo.svg'
import { MobileOnlyDiv, DesktopOnlyDiv } from './MyStyledComponents'

function Nav({ siteTitle }) {
  const [visible, setVisible] = useState(false)

  const LinkedItem = ({ children, ...props }) => (
    <Menu.Item as={Link} activeClassName="active" {...props}>
      {children}
    </Menu.Item>
  )
  const fullMenu = () => (
    <DesktopOnlyDiv
      style={{
        margin: '0 auto 1rem auto',
        maxWidth: '100rem',
        // position: 'webkit-sticky',
        position: 'sticky',
        top: '0rem',
        background: 'white',
        zIndex: 2,
        // maxWidth: '100vw',
      }}
    >
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
    </DesktopOnlyDiv>
  )

  const mobileMenu = () => (
    <MobileOnlyDiv style={{ zIndex: 2 }}>
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
          <Menu.Item
            onClick={() => setVisible(!visible)}
            onTouchStart={() => setVisible(!visible)}
          >
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
            <Menu.Item
              onClick={() => navigate('/')}
              onTouchStart={() => navigate('/')}
            >
              {/* <h2>Still Waters</h2> */}
              <Image
                size="mini"
                alt="still water psychology logo"
                src={blackLogo}
              />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item onClick={() => setVisible(!visible)}>
              <Icon size="large" name="bars" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Menu>
    </MobileOnlyDiv>
  )

  return (
    <>
      {mobileMenu()}

      {fullMenu()}
    </>
  )
}

export default Nav
