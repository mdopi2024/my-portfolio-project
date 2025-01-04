
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProjectsDetailsData = () => {
    const [project,setProject]=useState({})
    console.log(project)
    console.log(project)
    const {id}=useParams()
    useEffect(()=>{
        fetch('/projectDetails.json')
        .then(res=>res.json())
        .then(data=>{
           const find = data.projects.find(da=>da.id==id)
           setProject(find)
           
        })
    },[id])

    const {name,description,features,image ,liveDemo,technologies,github_server,
        github_client} = project || {}
        
    return (
        <div className='mt-24 flex  justify-center items-center gap-11 bg-[#5959592E] px-24 py-10'>
            {/* img */}
            <div className='w-full '>
                <div><img src={image} className='w-full rounded-lg'  alt="" /></div>
            </div>
            {/* text */}
            <div className='w-full border'>
               <p className='text-3xl font-bold text-[#00B4FF]'>{name}</p>
               <p>{description}</p>
               <div>
                <p className='text-2xl font-bold'>Feathers</p>
                {/* {
                    features.map((feather,indx)=> <ul className='list-disc list-inside' key={indx}>
                    <li>{feather}</li>
                    </ul>)
                } */}
               </div>
               <div>
               <p className='text-2xl font-bold'>Technology</p>
               {/* {
                technologies.map((teck,indx)=><ul className='list-disc list-inside' key={indx}>
                <li>{teck}</li>
                </ul>)
               } */}
               </div>

             <div>
               <Link className='border px-4 py-1' to={liveDemo}>Live Link</Link>
             </div>
            </div>
        </div>
    );
};

export default ProjectsDetailsData;