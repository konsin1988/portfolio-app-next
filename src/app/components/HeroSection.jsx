'use client'

import React from 'react'
import Image from 'next/image'
import TypeAnimationTitle from './TypeAnimationTitle'

const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Hello, I'm{" "}</span>
                <br />
                <TypeAnimationTitle/>
              </h1>
              <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequuntur modi, pariatur quisquam aspernatur aut quos repudiandae perspiciatis optio architecto expedita dolor possimus animi iste.</p>
              <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full 
                mr-4 bg-white
                 text-white bg-gradient-to-br from-blue-500 via-purple-500 
                 to-pink-500
                ">Hire me</button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 
                hover:bg-slate-800 text-white mt-3
                "><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></button>
              </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full 
                bg-[#181818] w-[250px] h-[250px] 
                relative">
                    <Image
                        src="/img/developer.png"
                        alt="developer"
                        className="absolute translate-x-8 translate-y-12"
                        width={200}
                        height={200}
                        />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection