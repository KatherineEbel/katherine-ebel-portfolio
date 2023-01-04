import * as React from 'react'
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
import {ReactElement} from "react";
import tw from "twin.macro";

const SKILL_MAP: Record<string, {link: string, icon: ReactElement, name: string}> = {
    docker: {
        name: 'Docker',
        link: 'https://www.docker.com/',
        icon: <SiDocker />
    },
    express: {
        name: 'Express',
        link: 'https://expressjs.com/',
        icon: <SiExpress/>
    },
    gatsby: {
        name: 'Gatsby',
        link: 'https://gatsbyjs.com',
        icon: <SiGatsby/>
    },
    go: {
        name: 'Go',
        link: 'https://go.dev/',
        icon: <SiGo/>
    },
    rails: {
        name: 'Rails',
        link: 'https://rubyonrails.org/',
        icon: <SiRubyonrails/>,
    },
    react:{
        name: 'React',
        link: 'https://reactjs.org/',
        icon: <SiReact/>
    },
    ruby: {
        name: 'Ruby',
        link: 'https://www.ruby-lang.org/en/',
        icon: <SiRuby/>,
    },

    tailwindcss: {
        name: 'TailwindCSS',
        link: 'https://tailwindcss.com',
        icon: <SiTailwindcss/>,
    },
    typescript: {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        icon: <SiTypescript/>,
    }
}

const StyledListItem = tw.li`text-green text-2xl flex gap-1 font-mono items-center hover:scale-125`

const Skills = () => {
    return (
        <>
            {Object.values(SKILL_MAP).map(({link, icon, name}) => (
                <StyledListItem key={name}>
                    <a className='flex flex-col place-items-center' href={link} target="_blank" rel="noopener noreferrer">
                        {icon}
                        <span className='text-[10px]'>
                        {name}
                        </span>
                    </a>
                </StyledListItem>
            ))}
        </>
    )
}

export default Skills