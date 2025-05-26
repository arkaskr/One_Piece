import { assets } from '../Assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
            <div>
                <img src={assets.logo} className='mb-[-1rem] mt-[-3rem] w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Thank You for visiting our website, if you are an One Piece fan too then this is for you <b>Kaizoku ou ni ore wa naru</b>
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 1122334455</li>
                    <li>contact@shopiee.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                &copy; Copyright 2025@ shopiee.com-All Right Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer