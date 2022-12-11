import Project from 'components/Project'
import * as React from "react";
import Skopos from 'assets/skopos-logo.png'
import JobHunt from 'assets/jobhunt-stats.png'
import Minesweeper from 'assets/minesweeper-game.png'


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
            <p className='text-center'>Open Source API monitoring tool for testing multi-step API workflows</p>
            <ul className='list-none list-inside flex flex-col lg:flex-row gap-4 font-medium text-light-green'>
              <li>React</li>
              <li>GraphQL</li>
              <li>Tailwind CSS</li>
              <li>AWS (ECS, RDS, Lambda)</li>
              <li>Docker</li>
            </ul>
          </Project>
          <Project screenshotURL={JobHunt} title={'JobHunt'} githubURL={'https://github.com/KatherineEbel/jobhunt'} websiteURL={'https://jobhunt.kathyebel.me'}>
            <p className='text-center'>Full-stack application to track your job applications</p>
            <ul className='list-none list-inside flex flex-col lg:flex-row gap-4 font-medium text-light-green'>
              <li>React</li>
              <li>Express</li>
              <li>Redux</li>
              <li>RTK Query</li>
              <li>Docker</li>
            </ul>
          </Project>
          <Project screenshotURL={Minesweeper} title={'Minesweeper'} githubURL='https://github.com/KatherineEbel/minesweeper' websiteURL='https://minesweeper.kathyebel.me/'>
            <p className='text-center'>Hopefully you are better at this game than I am 😅</p>
            <ul className='list-none list-inside flex flex-col md:flex-row gap-4 font-medium text-light-green'>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </Project>
        </section>
    )
}

export default Projects