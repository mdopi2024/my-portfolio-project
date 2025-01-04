import React, { useEffect, useState } from 'react';
import ProjectCart from '../ProjectCart/ProjectCart';

const MyProjects = () => {
    const [projects,setProjects]=useState([])

    useEffect(()=>{
        fetch('projectDetails.json')
        .then(res=>res.json())
        .then(data=>{setProjects(data.projects)})
    },[])
    return (
        <div>
          <p className='text-center  my-7 text-[#00B4FF] text-4xl font-bold'>My Projects</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-16 md:px-8'>
           {
            projects.map(project=>  <ProjectCart key={project.id} project={project}></ProjectCart>)
           }
          
          </div>
        </div>
    );
};

export default MyProjects;