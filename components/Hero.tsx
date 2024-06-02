import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <BackgroundBeams />
      </div>
      {/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />    
      </div> */}
      <div className='flex justify-center relative my-20 z-10'>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vm] flex flex-col items-center justify-center">
              <h1 className='uppercase tracking-widest text-center text-blue-100 max-w-80'>Abdulrahman&apos;s Portfolio</h1>
              <TextGenerateEffect 
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='Hi , I&apos;m Abdulrahman, a software engineer based in Algeria with a passion for Backend Development and DevOps.'
              />
              {/* <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                   
              </p> */}
              <a href="#about">  
                <MagicButton />
              </a>
          </div>
      </div>
    </div>
  )
}

export default Hero
