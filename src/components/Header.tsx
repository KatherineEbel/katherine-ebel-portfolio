import React from 'react'
import tw from 'twin.macro'
import { TbCode } from 'react-icons/tb'
import Nav from "./Nav";

const StyledHeader = tw.header`relative flex items-center gap-4 col-span-3 row-span-1 px-4`

export default function Header() {
    return (
        <StyledHeader>
            <div className='flex gap-1 font-light items-center text-green'>
                <TbCode className='text-5xl'/>
            </div>
            <Nav/>
        </StyledHeader>
    )
}