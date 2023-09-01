import Me from 'assets/me.png'
import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Skills from '../Skills'

const ImageWrapper = styled.div`
  ${tw`relative self-center h-60 w-60 col-span-full md:col-span-1 md:row-start-2 md:col-start-2 place-self-center 
   after:transition-transform after:duration-300 hover:after:-translate-y-1.5 hover:after:-translate-x-1.5
   after:absolute after:block after:w-[13.5rem] after:h-[13.5rem] after:rounded after:border-8 after:border-green after:bottom-[1rem] after:left-[3rem] after:z-[-1]`}
`

const StyledImage = tw.img`relative rounded`

const StyledSection = tw.section`grid grid-cols-2 items-center gap-x-6 gap-y-6 text-lg text-light-slate text-xl
`

const StyledParagraphWrapper = tw.div`flex flex-col justify-center items-center gap-6 col-span-full md:col-span-1`

const StyledHeading = tw.h1`flex-shrink-0 font-medium text-white text-3xl text-light-slate`

const StyledNumber = tw.span`mr-2 text-2xl text-green font-light font-mono`

const StyledLine = tw.div`border-t-[1px] border-slate w-full`


const About = () => {
    return (
        <StyledSection id='about'>
            <div className='col-span-2 flex items-center gap-4'>
                <StyledHeading>
                    <StyledNumber>01.</StyledNumber>
                    About Me
                </StyledHeading>
                <StyledLine/>
            </div>
            <StyledParagraphWrapper>
                <p>Hello! I'm Kathy, a Full-Stack Software Engineer based in Green Cove Springs, Florida. Currently, I'm
                    putting my skills to work at Hare Media Group, where I've quickly ramped up on Java and Spring Boot,
                    becoming an integral part of a nimble remote team. In this role, I've had the chance to contribute
                    to various projects, including architecting a high-performing front-end with TailwindCSS, Pebble,
                    and AlpineJS.</p>

                <p>Prior to Hare Media, I collaborated on <strong>Skopos</strong>, an open-source API monitoring tool
                    that sharpened my expertise and fueled my passion for software development. Whether I'm working
                    remotely for Hare Media Group or diving into side projects, I continually seek opportunities to grow
                    and make a meaningful impact.</p>

                <p>Aside from my day job, I also keep myself busy managing a virtual private server, which serves as a
                    sandbox for my personal projects and tech experiments.</p>

                <p>When I'm not behind a computer screen, I love hitting the open road on my Harley, exploring nature
                    with my family, or tackling trails on my ATV. These activities are among my favorite ways to
                    recharge and find inspiration.</p>

                <p className='self-start'>Some of the recent technologies and languages I've been using are:</p>
            </StyledParagraphWrapper>
            <ul
                className='grid items-center place-items-center self-center col-span-full grid-cols-3 md:grid-cols-9 gap-4 md:self-start'>
                <Skills/>
            </ul>
            <ImageWrapper>
                <StyledImage src={Me} alt='headshot'/>
            </ImageWrapper>
        </StyledSection>
    )
}

export default About