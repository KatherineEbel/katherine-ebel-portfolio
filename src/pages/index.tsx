import * as React from "react"
import tw, { GlobalStyles} from "twin.macro";
import {StyledAppContainer} from 'components/styled/styled';
import Header from "../components/Header";
import Aside from "../components/Aside";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import Contact from "../components/sections/Contact";
import Intro from "../components/sections/Intro";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";

const Layout = ({children}: { children: React.ReactNode}) => (
    <>
        <GlobalStyles/>
        {children}
    </>
)

const EmailLink = tw.a`text-lg bg-light-navy transition-transform duration-300
 hover:text-green -translate-y-28 hover:-translate-y-32 rotate-90`

const StyledMain = tw.main`
px-12 py-8 col-start-1 col-span-3 md:col-span-1 md:col-start-2 row-start-2 flex flex-col justify-center items-center gap-24 font-sans
`

const IndexPage = () => {
    return (
        <Layout>
            <StyledAppContainer>
                <title>Katherine Ebel</title>
                <Header/>
                <StyledMain>
                    <Intro/>
                    <About/>
                    <Projects/>
                    <Contact/>
                </StyledMain>
                <Aside side='left'>
                    <SocialLinks/>
                </Aside>
                <Aside side='right'>
                    <EmailLink href='mailto:hello@katherineebel.com'>hello@katherineebel.com</EmailLink>
                </Aside>
                <Footer/>
            </StyledAppContainer>
        </Layout>
    )
}

export default IndexPage
