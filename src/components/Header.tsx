import React, {useState} from 'react'
import tw from 'twin.macro'
import { TbCode } from 'react-icons/tb'
import Nav from "./Nav";
import useMediaQuery from "../hooks/useMediaQuery";
import json2mq from "json2mq";
import MobileNav from "./MobileNav";

const StyledHeader = tw.header`relative flex items-center gap-4 col-span-3 row-span-1 px-4`

export default function Header() {
    const [open, setOpen] = useState(false)
    const mobile = useMediaQuery(json2mq({maxWidth: 768}))
    const toggleOpen = () => {
        setOpen(!open)
    }
    return (
        <StyledHeader>
            <div className='flex gap-1 font-light items-center text-green'>
                <TbCode className='text-5xl'/>
            </div>
            <Nav isHidden={mobile}/>
            <MobileNav isHidden={!mobile} menuOpen={open} toggleOpen={toggleOpen}/>
        </StyledHeader>
    )
}