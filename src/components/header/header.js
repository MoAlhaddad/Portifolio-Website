/** @jsx jsx  */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { Keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from 'header/data';

export default function Header({ className }) {
  return (
    <header sx={StyleSheet.container}>
      <Container sx={StyleSheet.container}>
      <Logo src={LogoDark} />
      <Flex as="nav" sx={StyleSheet.nav}>
        {menuItems.map((menuItem. i) => (
          <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {menuItem.label}
            </Link>
        ))}
      </Flex>
      <Button className="donate__btn" variant="secondary" aria-label="Close">
        
      </Button>
      </Container>
    </header>
  )
}