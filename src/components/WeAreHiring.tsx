"use client"

import {animate, motion} from "framer-motion"
import Link from "next/link"

const WeAreHiring = () => {
    const variants = {
        slideUp: {
            initial : {
                y: 200,
                opacity: 0
            },
            animate:{
                y: 0,
                opacity: 1
            }
        },
        slideLeft : {
            initial : {
                x: 200,
                opacity: 0
            },
            animate:{
                x: 0,
                opacity: 1,                
                transition:{
                    delay: 0.5,
                    duration: 0.5
                }
            }
        },
        fadeIn:{
            initial: {
                opacity: 0
            },
            animate:{
                opacity: 1
            }
        }
        
    }
  return (
    <section className="p-10 py-20 bg-black text-white" id="we-are-hiring">
        <div className="max-w-4xl mx-auto text-justify">
            <motion.h2 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 text-center"
                variants={variants.slideUp}
                initial = 'initial'
                whileInView={'animate'}
                viewport={{
                    once: true
                }}
            >
                We're Hiring
            </motion.h2>
            
            <div 
                className="mt-10 space-y-5"
            >
                <motion.div
                    variants={variants.slideLeft}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{
                        once: true
                    }}
                >
                    We're on the lookout for talented individuals to join our team and be part of our exciting journey. At Pixel, we're dedicated to pushing the boundaries of creativity and delivering exceptional experiences to our clients and community.
                </motion.div>
                <motion.div
                    variants={variants.slideLeft}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{
                        once: true
                    }}
                >
                    Whether you're a seasoned professional or a rising star in your field, we welcome individuals who are eager to contribute their unique skills and perspectives to our team. From graphic designers to photographers, from creative directors to marketing mavens, there's a place for you here.
                </motion.div>
            </div>

            <Link href={'/we-are-hiring'} className="w-full flex justify-center">
                <motion.button 
                    className="bg-white rounded-full py-3 px-5 text-black mt-5 mx-auto hover:bg-neutral-700 hover:text-neutral-100 duration-200"
                    variants={variants.fadeIn}
                    initial = 'initial'
                    whileInView={'animate'}
                    viewport={{
                        once:true
                    }}
                >
                    Check Here
                </motion.button>
            </Link>
      </div>
    </section>
  )
}

export default WeAreHiring
