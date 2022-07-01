import {FiGithub, FiLinkedin, FiTwitter} from "react-icons/fi";
import {SiCodewars } from 'react-icons/si'
import * as React from "react";
import tw from "twin.macro";

const SOCIAL_LINKS = {
    codewars: 'https://www.codewars.com/users/KatherineEbel',
    github: 'https://github.com/KatherineEbel',
    twitter: 'https://twitter.com/Kathy_Ebel',
    linkedin: 'https://www.linkedin.com/in/kathyebel'
}

const StyledSocialLink = tw.a`text-2xl transition-transform duration-300 hover:-translate-y-2 hover:text-green`

const SocialLinks = () => {
    return (
        <>
            <StyledSocialLink href={SOCIAL_LINKS.codewars}>
                <SiCodewars/>
            </StyledSocialLink>

            <StyledSocialLink href={SOCIAL_LINKS.github}>
                <FiGithub/>
            </StyledSocialLink>
            <StyledSocialLink href={SOCIAL_LINKS.linkedin}>
                <FiLinkedin/>
            </StyledSocialLink>
            <StyledSocialLink href={SOCIAL_LINKS.twitter}>
                <FiTwitter/>
            </StyledSocialLink>
        </>
)
}

export default SocialLinks