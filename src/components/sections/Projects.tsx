import * as React from "react";
import tw from "twin.macro";


const Projects = () => {
    return (
        <section id='projects' className='flex flex-col gap-4 min-w-full'>
            <div className='flex gap-4 items-center'>
                <h1 className='font-light font-mono text-green'>
                    <span className='mr-2'>02.</span>
                    Projects
                </h1>
                <div className='border-t-[1px] w-full border-slate'/>
            </div>
            <p className='font-medium text-2xl'>Coming Soon...</p>
        </section>
    )
}

export default Projects