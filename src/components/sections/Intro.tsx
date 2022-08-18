import * as React from "react";

const Intro = () => {
    return (
        <section className='min-w-full flex flex-col mt-8 gap-6 text-5xl md:text-7xl font-black'>
            <h1 className='text-white tracking-wide'>
                Katherine Ebel
            </h1>
            <p className='text-xl text-green font-normal font-mono -order-1'>Hi, my name is</p>
            <p className='text-light-slate'>
                I build things for the web.
            </p>
            <div className='text-slate font-normal text-lg'>
                <p>Full-stack software engineer based out of Green Cove Springs, Florida</p>
                <p>I am currently preparing for the Capstone Program at <a className='font-medium tracking-wide text-light-green' href='https://launchschool.com/'>LaunchSchool</a></p>
            </div>
        </section>
    )
}

export default  Intro