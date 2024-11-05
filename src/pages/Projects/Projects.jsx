// import React, { useState }from 'react'

// const Projects = () => {
//     const [project, setProject] = useState([]);
//     const [filteredProjects, setFilteredProjects] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('All');
//     useEffect(()=>{
//         fetch('projects.json') then(res=> res.json()).then(data=> {
//             setProject(data);
//             setFilteredProjects(data);
//         });
//     },[]);

//     const handleFilterClick = (category) => {
//         setSelectedCategory(category);
//         if(category === 'All'){
//             setFilteredProjects(project);

//         }else{
//             const filtered=project.filter(project => project.category === category);
//             setFilteredProjects(filtered);
//         }

//     }



//   return (
//     <section>
//       <header>
//         <h2 className='h2 article-title'>Projects
//         </h2>
//       </header>

//       <ul className='filter-list'>
//         {['All','Web Development','Java','Python'].map(category => (
//             <li key={category} className='filter-item'>
//                 <button onClick={() =handleFilterClick(category)}
//                 data-filter-btn
//                 className={category === selectedCategory ? 'active': ''}>
//                     {category}

//                 </button>
//             </li>
//         ))}
//       </ul>

//       <section className='projects'>
//         <ul className='project-list'>
//             {
//                 filteredProjects.map(project => (
//                     <li key={project.id} className='project-item active' data-filter-item data-category={project.category}>
//                         <a href="">
//                             <figure className='project-img'>
//                                 <div className='project-item-icon-box'>
//                                     <FaRegEye/>
//                                 </div>
//                                 <img src={project.image} alt="" Loading='lazy' />
//                             </figure>
//                             <h3 className='project-title'>{project.title}</h3>
//                             <p className='project-category'>{project.category}</p>
//                         </a>

//                     </li>
//                 ))
//             }
//         </ul>

//       </section>
//     </section>
//   )
// }

// export default Projects

import React, { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';

const Projects = () => {
    const [project, setProject] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProject(data);
                setFilteredProjects(data);
            });
    }, []);

    const handleFilterClick = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredProjects(project);
        } else {
            const filtered = project.filter(proj => proj.category === category);
            setFilteredProjects(filtered);
        }
    };

    return (
        <section>
            <header>
                <h2 className='h2 article-title'>Projects</h2>
            </header>

            <ul className='filter-list'>
                {['All', 'Web Development', 'Java', 'Python'].map(category => (
                    <li key={category} className='filter-item'>
                        <button
                            onClick={() => handleFilterClick(category)}
                            className={category === selectedCategory ? 'active' : ''}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>

            <section className='projects'>
                <ul className='project-list'>
                    {filteredProjects.map(proj => (
                        <li key={proj.id} className='project-item active' data-filter-item data-category={proj.category}>
                            <a href="">
                                <figure className='project-img'>
                                    <div className='project-item-icon-box'>
                                        <FaRegEye />
                                    </div>
                                    <img src={proj.image} alt="" loading='lazy' />
                                </figure>
                                <h3 className='project-title'>{proj.title}</h3>
                                <p className='project-category'>{proj.category}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default Projects;
