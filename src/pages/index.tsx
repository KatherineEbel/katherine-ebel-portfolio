import * as React from "react"
import Header from "components/Header";
import {StyledAppContainer} from "components/styled/styled";
import Aside from "components/Aside";
import SocialLinks from "../components/SocialLinks";


const IndexPage = () => {
    return (
        <StyledAppContainer>
            <title>Katherine Ebel</title>
            <Header/>
            <main className='col-start-2 md:px-12 md:py-8 col-span-1 row-start-2 font-sans'>
                <section className='flex flex-col gap-6 text-7xl font-black'>
                    <h1 className='text-white tracking-wide'>
                        Katherine Ebel
                    </h1>
                    <p className='text-xl text-green font-normal font-mono -order-1'>Hi, my name is</p>
                    <p className='text-light-slate'>
                        I build things for the web.
                    </p>
                    <p className='text-slate font-normal text-lg'>I am a full stack software engineer based out of Green Cove Springs, Florida</p>
                </section>
            </main>
            <Aside side='left'>
                <SocialLinks/>
            </Aside>
            <Aside side='right'>
                <a href='mailto:hello@katherineebel.com' className='-translate-y-28 rotate-90'>hello@katherineebel.com</a>
            </Aside>
        </StyledAppContainer>
    )
}

export default IndexPage
