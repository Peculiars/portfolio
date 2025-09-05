import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'
import MagicButton from './ui/MagicButton'

const Hero = () => {
  return (
    <div className='pb-20 pt-24'>
        <div>
            <Spotlight className='-left-10 -top-40 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='left-full top-10 h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='left-80 top-28 h-[80vh] w-[50vw] ' fill='blue'/>
        </div>
        <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-black/[0.2]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"/>
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Code. Create. Captivate.</h2>
                <TextGenerateEffect words="I build modern web and mobile apps that users love." className='text-center text-[40px] md:text-4xl lg:text-6xl'/>
                <p className='text-center text-white-200 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>I&apos;m a frontend developer building responsive and engaging web & mobile apps with React, React Native, Nextjs and Expo</p>
                <Link href="#about">
                    <MagicButton title="See my work"  icon={<FaLocationArrow/>}  position='right'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero