import React from 'react'
import AnimatedTitle from '../animations/AnimatedTitle'
import AnimatedBody from '../animations/AnimatedBody'
import { motion } from 'framer-motion'
import { riseWithFade, riseWithFade1 } from '../animations/animations'
import { once } from 'events'

export default function Contact() {
    return (
        <div className='absolute flex flex-col justify-center items-center h-[100vh] top-[550vh] lg:top-[620vh] w-full'>
            <a id='contact' className='absolute -top-[1px]'></a>
            <div className='absolute -z-10 flex top-[12rem] w-full overflow-hidden'>
                <div className='flex gap-2 text-[40vh] opacity-5 whitespace-nowrap animate-RTL'>
                    <span>• Ready and thrilled to collaborate on exciting projects</span>
                    <span>• Let’s chat about your business goals and how we can contribute</span>
                    <span>• Whether it’s work related or just a friendly conversation, I’m in</span>
                    <span>• Feel free to drop me an email</span>
                    <span>• I’ll get back to you promptly</span>
                </div>
            </div>
            <div className='flex items-center relative -top-[5rem] lg:-top-[10rem] '>
                <AnimatedTitle text={"Let’s Talk"} className={"font-bold text-[10rem] lg:text-[15rem] xl:text-[18rem]"} wordSpace={"mr-[0.25em]"} charSpace={"-mr-[0.01em]"}/>
            </div>
            <div className="flex flex-col relative -top-[3rem] lg:-top-[5rem] lg:mt-0 lg:flex-row lg:w-[80%] items-end justify-center gap-10 lg:gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between">
                <div className="flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
                    <AnimatedBody  text={"Whether you have a project in mind, a question to ask, or just want to connect, I’m all ears. let’s start the conversation !"}
                                className={"-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"} />
                    <a target="_blank" className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
                        data-blobity-offset-y="2" href='mailto:manavbafna87+portfolio@gmail.com?subject=Collaboration Opportunity &body=Hello Manav, We have a project that aligns with your expertise. Can we discuss collaboration details at your earliest free time?'>
                        <p>Send me an email</p>
                    </a>
                </div>
                <motion.div className="flex gap-10 w-fit text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]"
                    variants={riseWithFade1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                >
                    <a target="_blank" aria-label="View GitHub Profile" href="https://github.com/Manav011" data-blobity-tooltip="GitHub">
                        <p>GH</p>
                    </a>
                    <a target="_blank" aria-label="View LinkedIn Profile" href="https://www.linkedin.com/in/manav-bafna-4a0134222" data-blobity-tooltip="LinkedIn">
                        <p>LN</p>
                    </a>
                    <a target="_blank" aria-label="View Twitter Profile" href="https://x.com/Manavbafna5" data-blobity-tooltip="Twitter">
                        <p>TW</p>
                    </a>
                    <a target="_blank" aria-label="View Instagram Profile" href="https://www.instagram.com/manav_bafna011/" data-blobity-tooltip="Instagram">
                        <p>IG</p>
                    </a>
                </motion.div>
            </div>
            <div className='flex justify-center items-center absolute uppercase text-center bottom-0 gap-10 md:gap-[20rem] lg:gap-[60rem] h-[8vh] w-full border-t-2 border-white/30'>
                <AnimatedBody text={"Copyright © 2024"}/>
                <motion.div className='w-fit gap-1 lg:flex lg:flex-nowrap'
                    variants={riseWithFade1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                ><p>Developed By</p>
                    <a className='underline underline-offset-2 hover:no-underline' target='_blank' href='https://github.com/manav011'>
                        <h4 data-blobity-offset-y="2" data-blobity-offset-x="2">Manav Bafna</h4>
                    </a>
                </motion.div>
            </div>
        </div>
    )
}
