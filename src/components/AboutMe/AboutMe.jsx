import React from 'react';
import img1 from '../../assets/img2-removebg-preview.png'

const AboutMe = () => {
    return (
        <div>
            <p className='text-center  my-7 text-[#00B4FF] text-4xl font-bold'>About Me</p>
            <div className=' bg-[#FFFFFF0D] flex flex-col md:flex-row'>
                <div className=' w-full flex justify-center items-center py-10'>
                    <img src={img1} className='w-60 h-60 object-cover rounded-full shadow-xl shadow-[#00b3ff3b] bg-[#00b3ff17]' alt="" />
                </div>
                <div className=' w-full flex justify-center items-center pr-9'>
                    <div>
                        <span className='text-2xl font-bold '>Hi</span>, I'm <span  className='text-[#00B4FF] font-bold'>Opi Korm</span>, a passionate frontend developer with a love for creating visually appealing and user-friendly web experiences. With a strong foundation in HTML, CSS, JavaScript, React , nodejs , expressjs , mongodb , github , I specialize in building responsive websites that not only look great but also provide a seamless user experience.
                        Over the years, I've honed my skills by working on a variety of projects, from simple landing pages to complex web applications. My goal is to turn creative ideas into functional, engaging digital products.
                        When I'm not coding, I enjoy staying up-to-date with the latest web development trends and continuously learning new technologies to keep my skills sharp.
                        Let's connect and create something amazing together!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;