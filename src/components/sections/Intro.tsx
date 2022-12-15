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
        </section>
    )
}

export default  Intro