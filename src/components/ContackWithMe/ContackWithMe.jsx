import Lottie from 'lottie-react';
import React from 'react';
import gmail from '../../assets/animation/Animation - 1735997786051.json'

const ContackWithMe = () => {
    return (
        <div className='py-12'>
            <div className='text-center max-w-2xl mx-auto'>
                <p className='text-center  my-7 text-[#00B4FF] text-4xl font-bold'>Contact </p>
                <p>Offering bespoke frontend development and UI/UX design services, I specialize in creating responsive, user-friendly websites that bring your vision to life. Whether you need a simple landing page or a complex web application, I deliver high-quality, tailored solutions.</p>
            </div>


            {/* form */}
            <div className='flex justify-center items-center bg-[#5959592E] my-10'>

                <div className='w-full flex justify-center items-center '><Lottie className='h-[350px]' animationData={gmail}> </Lottie>
                </div>


                <div className='w-full py-10  '>
                    <div className='flex flex-col max-w-lg gap-6'>
                        <input type="text" placeholder="Name" className="input input-bordered w-full" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full " />
                        <textarea className="textarea textarea-bordered h-[100px]" placeholder="Your message"></textarea>
                        <input className='input input-bordered w-full bg-[#00B4FF] text-white font-bold ' type="submit" value="Submit" />

                    </div>
                </div>

            </div>



        </div>
    );
};

export default ContackWithMe;