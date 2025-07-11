import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {CounterListItem, StyledLink} from "./styled/styled";
import scrollTo from 'gatsby-plugin-smoothscroll'

const navLinks = ['About', 'Projects', 'Contact'].map((link) => (
    <CounterListItem key={link}><button className={`text-md` }
                                        onClick={() => scrollTo(`#${link.toLowerCase()}`)}
    >{link}</button></CounterListItem>
))


interface NavProps {
    isHidden: boolean
}

const StyledNav = styled.nav<NavProps>`
  ${tw`text-lightest-slate ml-auto flex gap-4 items-center`}
        ${({ isHidden}) => isHidden && tw`opacity-0 hidden`};
    `
const StyledOl = tw.ol`flex items-center gap-4`

const Nav = ({ isHidden }: NavProps) => {

    return (
        <StyledNav isHidden={isHidden}>
            <StyledOl>
                {navLinks}
            </StyledOl>
            <StyledLink href='https://katherineebel.com/KatherineEbelSoftwareEngineerResume.pdf'>Resume</StyledLink>
        </StyledNav>
    )
}

export default Nav
