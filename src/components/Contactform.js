import React from 'react'

const ContactForm = () => {
    const name = 'Aanuoluwapo'
    return (
      <form>
            <div className='field'>
                <div className='name-row'>
          <div className='input-field' >
              <label> First name</label>
              <input type={'text'} id='first_name' placeholder='Enter your first name' />
          </div>
          <div className='input-field' >
              <label> Last name</label>
              <input type={'text'} id='last_name' placeholder='Enter your last name' />
                    </div>
                    </div>
          <div className='email'>
              <label> Email</label>
              <input type={'text'} id="email" placeholder='yourname@email.com'/>
          </div>
          <div className='message'>
                <label>Message</label>
                <textarea id='message' placeholder="Send me a message and I'll reply you as soon as possible"></textarea>   
          </div>
          <div className='checkbox'>
                <input type={'checkbox'} />   
                    <label>You agree to providing your data to {name} who may contact you</label>
          </div>     
        </div>
            <button id='btn__submit'>Send Message</button>
        </form>
  )
}

export default ContactForm