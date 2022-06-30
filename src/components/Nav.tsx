import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {CounterListItem, StyledLink} from "./styled/styled";

const navLinks = ['About', 'Experience', 'Work', 'Contact'].map((link) => (
    <CounterListItem key={link}><a className={`text-[13px]` } href={`#${link.toLowerCase()}`}>{link}</a></CounterListItem>
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
            <StyledLink href='https://katherineebel.com/resume.pdf'>Resume</StyledLink>
        </StyledNav>
    )
}

export default Nav