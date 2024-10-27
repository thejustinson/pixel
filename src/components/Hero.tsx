"use client"

import React from "react"
import { BackgroundBeams } from "./ui/background-beams"
import Image from "next/image"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="h-[calc(100lvh-70px)] lg:h-[100lvh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased py-10 lg:py-0">

      <div className="w-full h-full flex flex-col lg:flex-row">
          <div className="flex items-center h-full px-10 justify-center lg:justify-start py-10 ">
            <motion.h1 
              className="text-[2.5rem] md:text-5xl text-center lg:text-8xl lg:text-left font-extrabold text-white leading-9 lg:leading-tight"
              initial={{y:100, opacity:0}}
              animate={{y:0, opacity:1}}
            >
              <span className="">UNLEASH THE <br />POWER OF <br /></span><span className="text-purple-900">YOUR BRAND</span>
            </motion.h1>
          </div>
      </div>
      
      <BackgroundBeams />
    </div>
  )
}

export default Hero
