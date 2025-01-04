import React from 'react';

// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";
import SkillCard from '../SkillCard/SkillCard';
import html from '../../assets/html-removebg-preview.png'
import css from '../../assets/css-removebg-preview.png'
import tailwind from '../../assets/tailwind-removebg-preview.png'
import js from '../../assets/js-removebg-preview.png'
import express from '../../assets/express-removebg-preview.png'
import mongodb from '../../assets/mongodb-removebg-preview.png'



const Skills = () => {
    return (
        <div>
           <div className='text-center max-w-2xl my-10 mx-auto'>
           <p className='text-center  my-7 text-[#00B4FF] text-4xl font-bold'>Skills</p>
           <p>Proficient in HTML, CSS, JavaScript, and React.js, I specialize in creating responsive and visually stunning web applications. With a strong foundation in UI/UX design and modern development tools, I bring ideas to life with precision and creativity.</p>
           </div>
            <Marquee
            speed={70} 
           direction='left'
             >
             <div className='flex justify-center items-center '>
             <SkillCard img={html}></SkillCard>
             <SkillCard img={css}></SkillCard>
             <SkillCard img={tailwind}></SkillCard>
             <SkillCard img={js}></SkillCard>
             <SkillCard img={express}></SkillCard>
             <SkillCard img={mongodb}></SkillCard>
             
             </div>
          
             
             
            </Marquee>
        </div>
    );
};

export default Skills;