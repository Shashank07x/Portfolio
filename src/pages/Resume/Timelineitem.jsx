import React from 'react'

const Timelineitem = ({title,description,date,p1}) => {
  return (
    <li className='timeline-item'>
        <h4 className='h4 timeline-item-title'>{title}</h4>
        <p className='timeline-text'>{description}</p>
        <span>{date}</span>
        <p1 className='white-text'>{p1}</p1>
    </li>
  )
}

export default Timelineitem
