import styled, { css } from "styled-components";
import { Container } from "../../../globalStyles";
import { Link } from "react-router-dom";
import { nav_bar_data } from "./data";
const {
  text_color,
  background_color,
  border_bottom_color,
  hamburger_start_position,
} = nav_bar_data;

export const Wrapper=styled.div`
width:100%;
display:block;
`

export const Nav = styled.nav`
  display: flex;
  background: ${background_color};
  height: 80px;
  position: sticky;
  z-index: 999;
  top: 0;
  margin:0;
`;

export const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)`
  color: ${text_color};
  cursor: pointer;
  text-decoration: none;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

export const NavIcon = styled(nav_bar_data.logo_image)`
  margin-right: 30px;
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.5s ease;
    cursor: pointer;
    font-size: 2rem;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul(({click})=>`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  margin:0;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    max-height: 90vh;
    position: absolute;
    overflow-y: scroll;
    top: 80px;
    opacity: 1;
    transition: all 0.5s ease;
    background: ${background_color};
    right: ${click ? "0%" : "-110%"};
  }
`);

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${border_bottom_color};
  }

  @media screen and (max-width: 767px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: ${text_color};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 767px) {
    text-align: left;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;
