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
            <p>We are a team of passionate One Piece fans who live and breathe the adventures of the Straw Hat Pirates.</p>
            <p>At our core, we're driven by our love for One Piece and the community that surrounds it. Our platform is dedicated to sharing this passion, bringing together like-minded fans, and offering top-notch One Piece merchandise and content.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>To spread the magic of One Piece and help everyone experience the excitement, camaraderie, and joy it brings.</p>
          </div>
      </div>

      <div className='text-3xl py-4'>
          <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Every item in our collection is carefully curated to meet the highest standards of quality. We ensure that our products not only reflect the spirit of One Piece but also provide long-lasting value for our customers.</p>
        </div>
        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
            <b>Convenience:</b>
            <p className='text-gray-600'>We’re committed to providing a seamless and convenient shopping experience. From easy navigation to secure payment options and reliable delivery, we make it simple for you to bring One Piece magic into your life.</p>
        </div>
        <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-20'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Your satisfaction is our top priority. Our dedicated support team is always ready to assist you with any questions or concerns, ensuring that your experience with us is as smooth and enjoyable as possible.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>

  )
}

export default About