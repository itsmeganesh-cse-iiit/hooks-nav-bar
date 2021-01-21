import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavIcon,
  HamburgerIcon,
  NavMenu,
  NavLinks,
  NavItem,
  Wrapper
} from "./styles";
import { IconContext } from "react-icons/lib";
import { routes,nav_bar_data } from "./data";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const {logo_name,text_color,background_color}=nav_bar_data
  return (
    <Wrapper>
    <IconContext.Provider value={{ color: text_color }}>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <NavIcon />
            {logo_name && logo_name}
          </NavLogo>
          <HamburgerIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </HamburgerIcon>
          <NavMenu onClick={handleClick} click={click}>
            {routes.map((routeData) => {
              return (
                <NavItem>
                  <NavLinks to={routeData.route_path}>
                    {routeData.route_name}
                  </NavLinks>
                </NavItem>
              );
            })}
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </Wrapper>
  );
};

export default NavBar;
