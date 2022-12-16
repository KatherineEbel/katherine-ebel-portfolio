import Project from 'components/Project'
import {ButtonLink} from 'components/sections/Contact'
import * as React from "react";
import Skopos from 'assets/skopos-logo.png'
import JobHunt from 'assets/jobhunt-stats.png'
import Minesweeper from 'assets/minesweeper.png'
import Wiresnoop from 'assets/wiresnoop.png'


const Projects = () => {
    return (
        <section id='projects' className='flex flex-col gap-12 min-w-full'>
            <header className='flex gap-4 items-center'>
                <h1 className='font-light font-mono text-green'>
                    <span className='mr-2'>02.</span>
                    Projects
                </h1>
                <div className='border-t-[1px] w-full border-slate'/>
            </header>
          <p className='text-lightest-slate text-xl'>Here are a couple of my most recent projects</p>
          <Project screenshotURL={Skopos} title={'Skopos'} githubURL={'https://github.com/skopos-api-monitoring'} websiteURL={'https://skopos-api-monitoring.github.io'}>
            <p className='text-center text-lightest-slate mb-2'>Open Source API monitoring tool for testing multi-step API workflows, and running collections of tests in parallel.</p>
            <h3 className='text-xl font-medium my-4'>Technologies used</h3>
            <p className='text-green font-medium text-center'>React, Tailwind CSS, Prisma, GraphQL, AWS (ECS, RDS, Lambda, SNS, EventBridge), Docker</p>
            <ButtonLink href='https://youtu.be/y1N8N9Rhkdc'
            >Watch the Presentation</ButtonLink>
          </Project>

          <Project screenshotURL={Wiresnoop} title={'Wiresnoop'} websiteURL={'https://wiresnoop.kathyebel.me'}>
            <p className='text-center text-lightest-slate font-medium my-4'>Realtime RequestBin clone for debugging webhooks.</p>
            <h3 className='text-xl font-medium my-4'>Technologies used</h3>
            <p className='text-green text-center font-medium'>React, Socket.IO, Express, PostgreSQL, MongoDB</p>
          </Project>
          <Project screenshotURL={JobHunt} title={'JobHunt'} githubURL={'https://github.com/KatherineEbel/jobhunt'} websiteURL={'https://jobhunt.kathyebel.me'}>
            <p className='text-center text-lightest-slate font-medium my-4'>Full-stack application to track your job applications.</p>
            <h3 className='text-xl font-medium my-4'>Technologies used</h3>
            <p className='text-green text-center font-medium'>
              React, Redux, RTK Query, Docker, Express, TurboRepo
            </p>
          </Project>
          <Project screenshotURL={Minesweeper} title={'Minesweeper'} githubURL='https://github.com/KatherineEbel/minesweeper' websiteURL='https://minesweeper.kathyebel.me/'>
            <p className='text-center font-medium text-lightest-slate  mb-2'>Hopefully you are better at this game than I am. 😅</p>
            <h3 className='text-xl font-medium my-4'>Technologies used</h3>
            <p className='text-green text-center font-medium'>
              React, Redux
            </p>
          </Project>
        </section>
    )
}

export default Projects