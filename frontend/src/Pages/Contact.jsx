import React from 'react'
import Title from '../Components/Title'
import { assets } from '../Assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t border-gray-400'>
        <Title text1={'CONTACT '} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='rounded-lg w-[23rem] object-cover max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Park Street <br /> Lane 12. 4th Block</p>
          <p className='text-gray-500'>Tel: +91 1122334455 <br /> Email: dummy@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at OP</p>
          <p className='text-gray-500'>Learn more about our teams and jon openings</p>
          <button className='rounded-lg border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact