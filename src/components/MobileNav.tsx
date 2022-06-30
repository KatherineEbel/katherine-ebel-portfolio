import styled from "styled-components";
import tw from "twin.macro";
import React from "react";
import {StyledLink } from "./styled/styled";

interface MobileNavProps {
    isHidden: boolean
    menuOpen: boolean
    toggleOpen: () => void
}

export const CounterListItem = styled.li`
    counter-increment: item 1;
  ${tw`before:font-medium before:block flex flex-col items-center before:text-green before:mr-1 hover:text-white`}
  &:before {
    content: '0' counter(item) '.';
  }
`

const navLinks = ['About', 'Experience', 'Work', 'Contact'].map((link) => (
    <CounterListItem key={link}><a className={`mb-4 text-[13px]` } href={`#${link.toLowerCase()}`}>{link}</a></CounterListItem>
))

const StyledNavContainer = styled.div<Omit<MobileNavProps, 'toggleOpen'>>`
  ${tw`fixed transition-transform duration-500 inset-0 backdrop-blur-sm z-10`};
  ${({menuOpen}) => menuOpen ? tw`translate-x-0` : tw`translate-x-full`}
 `

const StyledNavToggle = styled.button<Omit<MobileNavProps, 'toggleOpen'>>`
  ${tw`absolute shadow-xl top-12 right-8 grid place-items-center z-20`};
  ${({menuOpen}) => menuOpen && tw`fixed`};
  ${({isHidden}) =>isHidden && tw`hidden`};
`

const StyledHamburger = styled.span<Omit<MobileNavProps, 'toggleOpen'>>`
  ${tw`relative bg-green h-0.5 max-h-0.5 w-6 after:rotate-0 before:rotate-0 before:transition-transform after:transition-transform before:absolute after:absolute before:content-[''] after:content-[''] before:left-auto before:bg-green after:bg-green before:w-8 after:h-0.5 after:w-4 after:top-2 after:right-0 before:h-0.5 before:bottom-2 before:right-0`};
  ${({menuOpen}) => menuOpen && tw`max-h-0 after:rotate-45 before:-rotate-45 before:top-[8px] before:w-6 after:w-6 before:left-0`};
`

const StyledNav = styled.nav<Omit<MobileNavProps, 'toggleOpen'>>`
  ${tw`bg-light-navy grid right-0 items-end justify-center gap-y-4 min-h-screen w-3/4 ml-auto`};
  ${({menuOpen}) => menuOpen && tw`fixed`};
`

const MobileNav = ({isHidden, menuOpen, toggleOpen}: MobileNavProps) => {
    console.log(menuOpen)
    return (
        <>
            <StyledNavToggle menuOpen={menuOpen} isHidden={isHidden} aria-label="toggle navigation"
                             onClick={toggleOpen}
            >
                <StyledHamburger menuOpen={menuOpen} isHidden={isHidden}/>
            </StyledNavToggle>
            <StyledNavContainer isHidden={menuOpen} menuOpen={menuOpen}>
                <StyledNav isHidden={isHidden} menuOpen={menuOpen}>
                    <ol>
                        {navLinks}
                    </ol>
                    <StyledLink href='/resume.pdf'>Resume</StyledLink>
                </StyledNav>
            </StyledNavContainer>
        </>
    )
}

export default MobileNav