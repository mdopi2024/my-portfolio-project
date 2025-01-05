import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import bannerImg from '../../assets/img2-removebg-preview.png'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className=' flex flex-col-reverse md:flex-row gap-10'>
           <div className='px-8 py-16 space-y-6'>
            <p className='text-xl'>Hi,I am Opi Korim</p>
            <h2 className='text-5xl text-[#00B4FF]'>Fontend Developer</h2>
            <p >with a passion for crafting intuitive and visually appealing websites.From responsive design to smooth user interactions, I focus on every detail.Let's collaborate to bring your vision to life.Explore my portfolio and see how I can help you achieve your goals.</p>
            <div className='flex justify-start items-center gap-4'>
                <Link to='https://www.facebook.com/home.php' className='bg-white p-2 rounded-full'><FaFacebookF className='text-black text-xl' /></Link>
                <Link to='https://github.com' className='bg-white p-2 rounded-full'><FiGithub className='text-black text-xl' /></Link>
            </div>
            <button className='btn bg-[#00B4FF] text-white font-bold'>DownLoad Resume</button>
           </div>
           {/* img */}
           <div className=' w-full  p-5'>
            <div className=' h-full w-auto  flex justify-center items-center '>
                <img className='w-96 shadow-2xl shadow-[#00B4FF] h-96 object-cover  rounded-full' src={bannerImg} alt="" />
            </div>
           </div>
         
        </div>
    );
};

export default Hero;