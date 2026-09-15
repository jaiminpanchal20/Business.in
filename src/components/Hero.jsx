import assets from '../assets/assets/assets'
import { motion } from "motion/react"


const Hero = () => {
    return (
        <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }} className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
                <img className='w-20' src={assets.group_profile} alt="" />
                <p className='text-xs font-medium'>Trusted by 10k+ people</p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl'>Turning Imagination into <span className='bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent'>Digital</span> impact.</motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital experiences.</motion.p>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='relative'>
                <img className='w-full max-w-6xl rounded-3xl' src={assets.Business} alt="" />
                <img className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' src={assets.bgImage1} alt="" />
            </motion.div>





        </div>



    )
}

export default Hero
