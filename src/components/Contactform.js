import React from 'react'

const ContactForm = () => {
    const name = 'Aanuoluwapo'
    return (
      <form>
      <div>
          <div className='input-field' id='first_name'>
              <label> First name</label>
              <input type={'text'} />
          </div>
          <div className='input-field' id='last_name'>
              <label> Last name</label>
              <input type={'text'} />
          </div>
          <div className='input-field' id='email'>
              <label> Email</label>
              <input type={'text'} />
          </div>
          <div>
                <label>Message</label>
                <textarea id='message'></textarea>   
          </div>
          <div>
                <input type={'checkbox'} />   
                    <label>You agree to providing your data to {name} who may contact you</label>
          </div>     
        </div>
            <button>Send Message</button>
        </form>
  )
}

export default ContactForm