import React from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import Icon from '../../icons/Icon'
import SideNavigation from '../side-bar/SideNav'
import SideNavContent from '../side-bar/SideNavContent'

const Nav = styled.nav`
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'noset')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 500;
  //background-color: lightblue;
`

const IconButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: unset;
  border-radius: 50%;
  border: none;
`
const IconButtonLeft = styled(IconButton)`
  left: 20px;
`

const IconButtonRight = styled(IconButton)`
  right: 20px;
`

export default function NavigationBar(props) {
  const [sideBarState, setSideBarState] = React.useState(false)
  function sideBarToggle() {
    setSideBarState((prev) => !prev)
  }

  return (
    <>
      <Nav bgColor={props.bgColor}>
        {props.backButton && (
          <IconButtonLeft
            onClick={() => props.backbuttonOnClick(props.backTarget)}
          >
            <Icon icon="back" width="40px" />
          </IconButtonLeft>
        )}
        <IconButtonRight onClick={sideBarToggle}>
          <Icon icon="menu" width="40px" />
        </IconButtonRight>
      </Nav>
      <AnimatePresence initial={false}>
        {sideBarState && (
          <SideNavigation onClick={sideBarToggle}>
            <SideNavContent />
          </SideNavigation>
        )}
      </AnimatePresence>
    </>
  )
}
