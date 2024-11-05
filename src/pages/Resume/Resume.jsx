import React from 'react'
import { FaBookReader } from "react-icons/fa";
import Timelineitem from './Timelineitem';
import Skillitem from './Skillitem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>
      <div className='timeline'>
        <div className='title-wrapper'>
            <div className='icon-box'>
            <FaBookReader />
            </div>
            <h3 className='h3'>Education</h3>
        </div>
        <ol className='timeline-list'>
            <Timelineitem
            title="Galgotias University"
            description="Bachelor of Technology"
            date="2021-2025"
            p1="82.60%"
            />
              <Timelineitem
            title="Little Angels School"
            description="Intermediate"
            date="2021"
            p1="86.40%"
            />
              <Timelineitem
            title="Little Angels School"
            description="High School"
            date="2019"
            p1="85.40%"
            />
        </ol>
      </div>

      <div className='skill'>
        <h3 className='h3 skills-title'>Technical Competencies</h3>
        <ul className='skills-list content-card'>
            <Skillitem title="Java Programming Language (java 18.0.2)" value={80}/>
            <Skillitem title="Python Programming" value={50}/>
            <Skillitem title="Computer Network" value={90}/>
            <Skillitem title="Operating System" value={75}/>
            <Skillitem title="HTML, CSS, JavaScript" value={90}/>
            <Skillitem title="React.js" value={60}/>
            <Skillitem title="Database: SQL" value={80}/>
        </ul>
      </div>

      {/* extra */}
      <div className='clients'>
        <h3 className='h3 clients-title'>Personal Competencies</h3>
        <ul className='clients-list has-scrollbar'>
            <li className='clients-item'>
                <a href="#">
                    <img src="../../../public/images/logo-1-color.jpg" alt="" />
                </a>
            </li>
            <li className='clients-item'>
                <a href="#">
                    <img src="../../../public/images/logo-2-color.jpg" alt="" />
                </a>
            </li>
            <li className='clients-item'>
                <a href="#">
                    <img src="../../../public/images/logo-3-color.jpg" alt="" />
                </a>
            </li>
            <li className='clients-item'>
                <a href="#">
                    <img src="../../../public/images/logo-4-color.jpg" alt="" />
                </a>
            </li>
            <li className='clients-item'>
                <a href="#">
                    <img src="../../../public/images/logo-5-color.jpg" alt="" />
                </a>
            </li>
        </ul>

      </div>
    </section>
  )
}

export default Resume
