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
              <p>
                Hi, I’m <strong>Kathy</strong>—a detail-oriented Full-Stack Software Engineer based in Green Cove Springs, Florida.
              </p>
              <p>
                Most recently, I worked at Hare Media Group, where I quickly got up to speed with Java and Spring Boot. Working within a small, remote team allowed me to contribute to key projects and broaden my full-stack development skills.
              </p>
              <p>
                Before that, I co-created Skopos, an open-source API monitoring tool that helped me sharpen my skills and deepen my understanding of software development. I’m always looking for ways to learn and improve, whether through contract work, side projects, or exploring new tech.
              </p>
              <p>
                I also manage a virtual private server at home, which I use as a sandbox for experimenting with tech and building personal projects.
              </p>
              <p>
                When I’m not coding, I like riding my Harley and exploring nature with my family. Those moments help me recharge and keep me inspired.
              </p>
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
