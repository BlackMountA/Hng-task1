import React from 'react'

const ContactForm = () => {
    const name = 'Aanuoluwapo'
    return (
      <form>
<<<<<<< HEAD
        <div className='fields'>
          <div className='name__row'>
            <div className='input-field'>
              <label> First name</label>
              <input type={'text'} placeholder="Enter your first name" id='first_name' />
              <p>fmv</p>
            </div>
              
            <div className='input-field'>
              <label> Last name</label>    
              <input type={'text'} placeholder="Enter your last name" id='first_name' />
            </div>
          </div>
          
            <div className='email'>
              <label> Email Address</label>
              <input type={'email'} placeholder="yourname@gmail.com" id='email' />
            </div>
          

            <div className='message'>
              <label>Message</label>
              <textarea id="message" placeholder="Send me a message and I will reply you as soon as possible.."></textarea>
            </div>
          

            <div className='checkbox'>
              <input type={'checkbox'} /> <p>You agree to providing your data to {name} who may contact you</p> 
            </div>
          
          </div>
          <button id='btn__submit'>Send Message</button>
            </form>
=======
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
>>>>>>> cb86b74 (feature: Jsx templates)
  )
}

export default ContactForm