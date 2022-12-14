import * as React from 'react'
import tw from 'twin.macro'

const ButtonLink = tw.a`text-green whitespace-nowrap font-medium place-self-center text-sm md:text-xl capitalize border border-green my-6 py-2 px-4 md:py-4 md:px-6 rounded hover:bg-teal-100 hover:bg-opacity-10 transition-opacity duration-300`

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col  justify-center gap-4'>
      <div className='flex gap-4 items-center'>
        <h1 className='font-light flex-shrink-0 font-mono text-green'>
          <span className='mr-2'>03.</span>
          What's Next?
        </h1>
        <div className='border-t-[1px] w-full border-slate'/>
      </div>
      <div className='text-xl text-light-slate'>
        <p>Excited for what comes next. Get in touch if you'd like to work with me!</p>
      </div>

      <div className='flex gap-4 m-auto'>
        <ButtonLink href='mailto:hello@katherineebel.com'>Say hello</ButtonLink>
        <ButtonLink href='/resume.pdf'>Check out My Resume</ButtonLink>
      </div>

    </section>
  )
}

export default Contact