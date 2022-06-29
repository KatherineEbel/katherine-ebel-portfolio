import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import useMediaQuery from "../hooks/useMediaQuery";
import json2mq from "json2mq";

// TODO: get styled components working with props and tailwindcss
const openCss = `rotate-[.625turn] after:opacity-0 before:rotate-90 before:w-6 before:left-[1px] before:top-0`
const closeCss = `rotate-0 after:rotate-0`
const hamburgerStyles = `relative transition-transform duration-500 cursor-pointer after:transition-transform before:transition-opacity md:hidden group-hover:cursor-pointer after:group-hover:cursor-pointer before:group-hover:cursor-pointer group-hover:bg-white after:group-hover:bg-white before:group-hover:bg-white h-0.5 w-6 bg-green before:top-3 before:right-0 after:right-0 after:bottom-3 before:absolute after:absolute before:content-[''] after:content-[''] before:h-0.5 after:h-0.5 before:w-4 after:w-8 before:bg-green after:bg-green`
const StyledSpan = tw.span`text-green`
const StyledLink = tw.a`text-green border border-green px-2 py-2 rounded`

const navLinks = ['About', 'Experience', 'Work', 'Contact'].map((link, idx) => (
    <a key={link} className={`flex gap-1 font-light text-[13px]` } href={`#${link.toLowerCase()}`}><StyledSpan>{`0${idx + 1}.`}</StyledSpan>{link}</a>
))


const Nav = () => {
    const [open, setOpen] = useState(true)
    const [drawerStyles, setDrawerStyles] = useState<string>()
    const isMedium = useMediaQuery(json2mq({minWidth: 768}))

    useEffect(() => {
        isMedium && setOpen(true)
    }, [isMedium])

    useEffect(() => {
        setDrawerStyles(open ? `translate-x-0` : `translate-x-full`)
    }, [open])

    const toggleOpen = () => setOpen(!open);

    const buttonStyles = `${open ? 'fixed' : 'absolute'} top-8 right-8 z-[100] group flex flex-col gap-2 cursor-pointer `
    const navStyles = `bg-light-navy md:bg-transparent md:flex md:items-center md:gap-4 flex-1 ml-auto ${open && !isMedium ? 'grid place-items-center py-48 w-3/4' : ''}`
    const drawerOpenStyles = `${!isMedium && open ? `z-[90] backdrop-blur-sm bg-white/30` : `backdrop-blur-none`}`
    return (
        <>
            <button className={buttonStyles} aria-label="toggle navigation"
                    onClick={toggleOpen}
            >

                <span className={`${hamburgerStyles} ${open ? openCss : closeCss}`}/>
            </button>
            <div className={`${drawerStyles} ${drawerOpenStyles} md:ml-auto translate-transform duration-500 fixed md:static flex flex-col md:flex-row inset-0 z-10}`}>
                <nav className={`${navStyles}`}>
                    {navLinks}
                    <StyledLink href='https://katherineebel.com/resume.pdf'>Resume</StyledLink>
                </nav>
            </div>
        </>
    )
}

export default Nav