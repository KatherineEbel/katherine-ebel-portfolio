import * as React from 'react'
import { FiChevronRight} from "react-icons/fi";
import {
    SiDocker,
    SiExpress,
    SiRubyonrails,
    SiTypescript,
    SiGatsby,
    SiGo,
    SiRuby,
    SiTailwindcss,
    SiReact
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import {IconType} from "react-icons";
import {ReactElement} from "react";
import tw from "twin.macro";

interface SkillProps {
    name: string
    link: string
}


const SKILL_MAP: Record<string, {link: string, icon: ReactElement}> = {
    docker: {
        link: 'https://www.docker.com/',
        icon: <SiDocker />
    },
    express: {
        link: 'https://expressjs.com/',
        icon: <SiExpress/>
    },
    gatsby: {
        link: 'https://gatsbyjs.com',
        icon: <SiGatsby/>
    },
    go: {
        link: 'https://go.dev/',
        icon: <SiGo/>
    },
    rails: {
        link: 'https://rails.org',
        icon: <SiRubyonrails/>,
    },
    react:{
        link: 'https://reactjs.org/',
        icon: <SiReact/>
    },
    ruby: {
        link: 'https://www.ruby-lang.org/en/',
        icon: <SiRuby/>,
    },

    tailwindcss: {
        link: 'https://tailwindcss.com',
        icon: <SiTailwindcss/>,
    },
    typescript: {
        link: 'https://www.typescriptlang.org/',
        icon: <SiTypescript/>,
    }
}

const StyledListItem = tw.li`text-green text-2xl flex gap-1 font-mono items-center hover:scale-125`

const Skills = () => {
    return (
        <>
            {Object.values(SKILL_MAP).map(({link, icon}) => (
                <StyledListItem>
                    <a href={link}>
                        {icon}
                    </a>
                </StyledListItem>
            ))}
        </>
    )
}

export default Skills