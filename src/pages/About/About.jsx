import React from 'react'
import Service from './service'

const servicesData = [
    {
      "title": "Software Development",
      "icon": "/images/icon-design.svg",
      "description": "Developing robust applications using Java for enhanced user engagement."
    },
    {
      "title": "Web development",
      "icon": "/images/icon-dev.svg",
      "description": "High-quality development of sites at the professional level."
    },
    {
      "title": "Database Management",
      "icon": "/images/icon-app.svg",
      "description": "Managing data with MongoDB and SQL for optimal performance."
    },
    {
      "title": "Graphic Designing",
      "icon": "/images/icon-photo.svg",
      "description": "Designing engaging interfaces that effectively communicate ideas."
    }
  ]

const About = () => {
  return (
    <div className='about active'>
      <header>
        <h2 className='h2 article-title'>About Me</h2>
      </header>
      <section className='about-text'>
        <p>As a dedicated Computer Science Engineering student at Galgotias University, I bring a strong foundation in Java and full-stack web development, along with hands-on experience across diverse projects. My journey includes actively participating in renowned hackathons like the Smart India Hackathon (SIH) and the NASA International Space Apps Challenge, where I collaborated with teams to create real-world solutions for impactful challenges. Through my commitment to professional growth, I’ve also completed AICTE virtual internships that enriched my understanding of industry practices and enhanced my technical skills.</p>
        <p>Beyond academics, I’m an ex-member of the Cybercell Club, where I gained practical insights into cybersecurity and contributed to our campus’s tech-driven initiatives. My passion for robotics has led me to explore cutting-edge technologies, pushing me to innovate and create solutions that make a positive impact. As I continue my academic and professional journey, I am committed to advancing my skills, driving innovation, and delivering impactful technology solutions that address real-world needs.</p>
      </section>

      <section className='service'>
        <h2 className='h3 service-title'>What I'm Doing</h2>
        <ul className='service-list'>
            {
                servicesData.map((service, index) => (
                    <Service key={index} title={service.title} icon={service.icon} description={service.description}/>
                ))
            }
        </ul>
      </section>
    </div>
  )
}

export default About
