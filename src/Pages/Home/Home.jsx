import React from 'react';
import Hero from '../../components/Hero/Hero';
import AboutMe from '../../components/AboutMe/AboutMe';
import Skills from '../../components/Skills/Skills';

const Home = () => {
    return (
        <div  className='pt-20 mx-5 max-w-screen-xl md:mx-auto'>
          {/* Hero section */}
        <div>
           <Hero></Hero>
           </div>
           <div>
            <AboutMe></AboutMe>
           </div>
           <div className='py-10 max-w-screen-lg mx-auto'>
            <Skills></Skills>
           </div>
        </div>
    );
};

export default Home;