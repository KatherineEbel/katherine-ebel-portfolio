import React, {PropsWithChildren} from 'react'
import { FiGithub} from 'react-icons/fi'
import { GoLinkExternal } from 'react-icons/go'


interface ProjectProps extends PropsWithChildren{
  title: string
  screenshotURL: string
  githubURL: string
  websiteURL: string
}

export default function Project ({children, title, githubURL, screenshotURL, websiteURL}: ProjectProps) {
  return (
    <section className='grid gap-4 md:gap-10 md:grid-cols-2 md:grid-rows-12'>
      <header className='flex items-start justify-between md:col-start-2 md:row-start-1 md:row-span-4 md:gap-8'>
        <h3 className='text-3xl font-bold'>{title}</h3>
        <div className='flex gap-4 text-2xl '>
          <a href={githubURL} className='hover:text-green transition-all duration-300 hover:-translate-y-3'>
            <FiGithub />
          </a>
          <a href={websiteURL} className='hover:text-green transition-all duration-300 hover:-translate-y-3'>
            <GoLinkExternal />
          </a>
        </div>
      </header>
      <img className='md:col-span-1 m-auto max-w-[80%] md:row-start-4 md:row-span-full' src={screenshotURL} alt={title + " screenshot"} />
      <div className='rounded-lg md:relative md:row-start-2 md:col-start-2 bg-light-navy p-4 grid place-items-center'>
        {children}
      </div>
    </section>
  )
}