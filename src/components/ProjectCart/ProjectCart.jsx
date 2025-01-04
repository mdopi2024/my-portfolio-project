import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCart = ({project}) => {
   const {name,image,id}=project ||{}
    return (
        <div className={`h-[380px] bg-[#5959592E] rounded-lg  p-5 `} >
         <div className='h-full w-full '>
            <img className='h-[250px] w-full rounded-lg' src={image} alt="" />
            <p className='text-[#00B4FF] text-2xl mt-6 font-bold'>{name}</p>
            <div className='flex justify-end'>
            <Link to={`/details/${id}`} className='btn bg-[#5959592E] hover:bg-[#00B4FF]   hover:text-white border-[#00B4FF] rounded-md px-2 py-1'>View More</Link>
        </div>
         </div>
        
        </div>
    );
};

export default ProjectCart;