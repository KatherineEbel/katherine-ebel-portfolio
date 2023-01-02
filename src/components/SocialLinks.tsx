import {FiGithub, FiLinkedin} from "react-icons/fi";
import {SiCodewars, SiLeetcode } from 'react-icons/si'
import * as React from "react";
import tw from "twin.macro";

const SOCIAL_LINKS = {
    codewars: 'https://www.codewars.com/users/KatherineEbel',
    github: 'https://github.com/KatherineEbel',
    linkedin: 'https://www.linkedin.com/in/kathyebel',
    leetcode: 'https://leetcode.com/KatherineEbel/',
}

export const StyledSocialLink = tw.a`text-2xl transition-transform duration-300 hover:-translate-y-2 hover:text-green`

const SocialLinks = () => {
    return (
        <>
          <StyledSocialLink href={SOCIAL_LINKS.leetcode}>
            <SiLeetcode/>
          </StyledSocialLink>
          <StyledSocialLink href={SOCIAL_LINKS.codewars}>
                <SiCodewars/>
            </StyledSocialLink>

            <StyledSocialLink href={SOCIAL_LINKS.github}>
                <FiGithub/>
            </StyledSocialLink>
            <StyledSocialLink href={SOCIAL_LINKS.linkedin}>
                <FiLinkedin/>
            </StyledSocialLink>
        </>
)
}

export default SocialLinks