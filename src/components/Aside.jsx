import { GiClawSlashes } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import React from 'react'

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
            <img src="../../public/images/profile.jpg" alt="" width="80px" />
        </figure>
        <div className="info-content">
            <h1 className="name">Shashank S Saxena</h1>
            <p className="title">Web Developer</p>
        </div>
        <button className="info_more-btn">
            <span>
                Show Contacts
            </span>
            <GiClawSlashes />
        </button>
      </div>
      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
            <li className="contact-item">
                <div className="icon-box"> 
                <MdMarkEmailRead />
                </div>

                <div className="contact-info">
                    <p className="contact-title">Email</p>
                    <a href="mailto:shashank41swaroop@gmail.com"  className="contact-link">shashank41swaroop@gmail.com</a>
                </div>
            </li>

            <li className="contact-item">
                <div className="icon-box"> 
                <FaPhoneAlt />
                </div>

                <div className="contact-info">
                    <p className="contact-title">Phone</p>
                    <a href="tel:+91 9548405463"  className="contact-link">+91 9548405463</a>
                </div>
            </li>

            <li className="contact-item">
                <div className="icon-box"> 
                <SlCalender />
                </div>

                <div className="contact-info">
                    <p className="contact-title">D.O.B</p>
                    <time dateTime="2004-04-03"  className="contact-link">03 Apr, 2004</time>
                </div>
            </li>

            <li className="contact-item">
                <div className="icon-box"> 
                <MdLocationOn />
                </div>

                <div className="contact-info">
                    <p className="contact-title">Location</p>
                    <address>G-527 Alpha 2, Greater Noida</address>
                </div>
            </li>
        </ul>

      </div>
    </aside>
  )
}

export default Aside
