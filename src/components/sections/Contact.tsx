import * as React from 'react'
import tw from 'twin.macro'

const ButtonLink = tw.a`text-green font-medium place-self-center text-xl capitalize border border-green my-6 py-4 px-6 rounded hover:bg-teal-100 hover:bg-opacity-10 transition-opacity duration-300`

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col justify-center gap-4'>
      <div className='flex gap-4 items-center'>
        <h1 className='font-light flex-shrink-0 font-mono text-green'>
          <span className='mr-2'>03.</span>
          What's Next?
        </h1>
        <div className='border-t-[1px] w-full border-slate'/>
      </div>
      <h2 className='text-lightest-slate font-bold text-4xl'>Get In Touch</h2>
      <div className='text-xl text-light-slate'>
        <p>I am excited to start the Capstone Program at Launch School in August, and
          am expecting to be quite busy for the next few months. </p>
        <p className='my-2'>Following Capstone I will be open for opportunities.</p>
      </div>

      <ButtonLink href='mailto:hello@katherineebel.com'>Say hello</ButtonLink>
    </section>
  )
}

export default Contact