import React from 'react';

const SkillCard = ({img}) => {
    return (
        <div className='bg-[#FFFFFF0D] box-border p-4 rounded-lg mx-16  max-w-screen-sm '>
            <img className='w-28 h-28 object-cover ' src={img} alt="" />
        </div>
    );
};

export default SkillCard;