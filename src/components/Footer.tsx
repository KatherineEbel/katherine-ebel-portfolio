import React from "react";
import SocialLinks from "./SocialLinks";
import tw from "twin.macro";

const StyledLink = tw.a`text-green font-medium hover:text-lightest-slate`
const StyledFooter = tw.footer`row-start-3 col-start-2 self-end flex flex-col
 gap-2 items-center`

const Footer = () => {
    return (
        <StyledFooter>
            <div className='flex gap-4 md:hidden'>
                <SocialLinks/>
            </div>
            <p className='text-xs whitespace-nowrap my-4 md:my-0'>Design Inspired by <StyledLink href='https://brittanychiang.com/'>Brittany Chiang</StyledLink></p>
        </StyledFooter>
    )
}

export default Footer