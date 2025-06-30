import styled, {css, keyframes} from "styled-components";
import tw from "twin.macro";
import React, {useRef} from "react";
import {StyledLink} from "./styled/styled";
import {useOnClickOutside} from "../hooks/useClickOutside";

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

const StyledNavContainer = styled.div<Omit<MobileNavProps, 'toggleOpen'>>`
  ${tw`fixed transition-transform duration-500 inset-0 backdrop-blur-sm z-10`};
  ${({menuOpen}) => menuOpen ? tw`translate-x-0` : tw`translate-x-full`}
`

const StyledNavToggle = styled.button<Omit<MobileNavProps, 'toggleOpen'>>`
  ${tw`absolute top-12 right-8 grid place-items-center z-20 hover:bg-green`};
  ${({menuOpen}) => menuOpen && tw`fixed`};
  ${({isHidden}) => isHidden && tw`hidden`};
`

const StyledHamburger = styled.span<Omit<MobileNavProps, 'toggleOpen'>>`
  ${tw`relative bg-green h-1 max-h-1 w-8 rounded-sm
   before:rotate-0 before:transition-transform  before:absolute before:content-[''] before:rounded-sm
    before:left-auto before:bg-green before:w-10 before:h-1 before:bottom-2 before:right-0
   after:transition-transform after:rotate-0 after:absolute  after:content-['']
      after:bg-green after:h-1 after:w-6 after:top-2 after:right-0 after:rounded-sm `};
  ${({menuOpen}) => menuOpen && tw`max-h-0 after:rotate-45 before:-rotate-45 before:top-[8px] before:w-8 after:w-8 before:left-0`};
`

const StyledNav = styled.nav<Omit<MobileNavProps, 'toggleOpen'>>`
  ${tw`bg-light-navy grid right-0 items-end justify-center gap-y-4 min-h-screen w-3/4 ml-auto`};
  ${({menuOpen}) => menuOpen && tw`fixed`};
`

const MobileNav = ({isHidden, menuOpen, toggleOpen}: MobileNavProps) => {
    const navLinks = ['About', 'Projects', 'Contact'].map((link) => (
        <CounterListItem key={link}><a className={`mb-4 text-[13px]`} onClick={toggleOpen}
                                       href={`#${link.toLowerCase()}`}>{link}</a></CounterListItem>
    ))

    const ref = useRef<HTMLDivElement>(null)

    useOnClickOutside(ref, () => {
        menuOpen && !isHidden && toggleOpen()
    })

    return (
        <>
            <StyledNavToggle id='nav-toggle' menuOpen={menuOpen} isHidden={isHidden} aria-label="toggle navigation"
                             onClick={toggleOpen}
            >
                <StyledHamburger menuOpen={menuOpen} isHidden={isHidden}/>
            </StyledNavToggle>
            <StyledNavContainer isHidden={menuOpen} menuOpen={menuOpen}>
                <div ref={ref}>
                    <StyledNav isHidden={isHidden} menuOpen={menuOpen}>
                        <ol>
                            {navLinks}
                        </ol>
                        <StyledLink href='/KatherineEbelSoftwareEngineerResume.pdf'>Resume</StyledLink>
                    </StyledNav>
                </div>
            </StyledNavContainer>
        </>
    )
}

export default MobileNav
