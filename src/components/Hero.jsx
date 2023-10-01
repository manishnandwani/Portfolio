import React from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className='relative w-full mx-auto h-screen mx-auto '>
      <div className={`flex inset-0 flex-col mx-auto absolute top-[140px]`}>
        <div className='flex flex-row'>
          <div className='flex flex-col items-center justify-center'>
            <div className='h-5 w-5 rounded-full bg-[#915eff]' />
            <div className='sm:h-60 h-40 w-1 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi I'm <span className='text-[#915eff]'>Manish</span></h1>
            <p className={`${styles.heroSubText} sm:block hidden`}>
              I develop Progressive web applications
            </p>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default SectionWrapper(Hero)