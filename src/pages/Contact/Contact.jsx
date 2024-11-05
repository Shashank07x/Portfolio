import React from 'react'

const Contact = () => {
  return (
    <section className='contact'>
         <header>
        <h2 className='h2 article-title'>Contact</h2>
      </header>
      <section className='mapbox'>
        <figure>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224408.21866736058!2d77.35118116154254!3d28.49826040077775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1730805704551!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </figure>
      </section>

      <section className='contact-form'>
        <h3 className='h3 form-title'>Contact Form</h3>
        <form action="#" className='form'>
            <div className='input-wrapper'>
                <input type="text" name="fullname" id="fullname" className='form-input' placeholder='Full Name' />
                <input type="email" name="email" id="email" className='form-input' placeholder='Email Address' />
            </div>
            <textarea name="message" className='form-input' placeholder='Your Message' id=""></textarea>
            <button className='form-btn' type='submit'>
                <span>
                    Send Message
                </span>
            </button>
        </form>

      </section>

    </section>
  )
}

export default Contact
