import * as React from "react";
import tw from "twin.macro";
import Me from 'assets/me.png'


const About = () => {
    return (
        <section id='about' className='grid grid-cols-2 items-center gap-x-2 gap-y-6 text-lg text-light-slate text-xl'>
            <h1 className='flex-shrink-0 font-medium text-white text-3xl text-light-slate'>
                <span className='mr-2 text-2xl text-green font-light font-mono'>01.</span>
                About Me
            </h1>
            <div className='border-t-[1px] -ml-4 w-full border-slate'/>
            <div className='flex justify-center items-center gap-4 col-span-2'>
                <div className='flex flex-col gap-4'>
                    <p className='text-light-slate'>I am excited to start the Capstone Program at Launch School in August, and I will be quite busy for the next few months. After that I am open for opportunities.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid cupiditate in nemo nobis, nulla quasi saepe soluta sunt unde. Aperiam architecto inventore magnam magni odit quisquam quo repellat rerum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid cupiditate in nemo nobis, nulla quasi saepe soluta sunt unde. Aperiam architecto inventore magnam magni odit quisquam quo repellat rerum.</p>
                </div>
            </div>
            <div className='relative group self-center h-56 w-56 col-span-2 place-self-center'>
                <div className='absolute transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 border border-green border-4 rounded h-52 w-52'/>
                <div className='absolute bottom-10 group right-9 w-56'>
                    <div className='absolute inset-0 bg-indigo-600 backdrop-brightness-150 bg-opacity-50 group-hover:hidden rounded z-30'/>
                    <img src={Me} alt='me' className={`relative rounded w-56`}/>
                </div>
            </div>
        </section>
    )
}

export default About