import React from 'react'
import Title from '../Components/Title'
import { assets } from '../Assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-3xl text-center pt-8 border-t border-gray-400'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
          <img src={assets.about_img} className='rounded-lg w-full max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem Ipsum is a type of placeholder (dummy) text used in the design, publishing, and web development world</p>
            <p>Lorem Ipsum is a type of placeholder (dummy) text used in the design, publishing, and web development world</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem Ipsum is a type of placeholder (dummy) text used in the design, publishing, and web development world</p>
          </div>
      </div>

      <div className='text-3xl py-4'>
          <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem Ipsum is a type of placeholder (dummy) text used in the design, publishing, and web development world</p>
        </div>
        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem Ipsum is a type of placeholder (dummy) text used in the design, publishing, and web development world</p>
        </div>
        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem Ipsum is a type of placeholder (dummy) text used in the design, publishing, and web development world</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>

  )
}

export default About