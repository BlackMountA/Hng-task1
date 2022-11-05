import { useForm } from "react-hook-form"
const ContactForm = () => {
    const name = 'Aanuoluwapo';
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
            <div className='field'>
                <div className='name-row'>
          <div className='input-field' >
              <label> First name</label>
                        <input type={'text'} id='first_name' placeholder='Enter your first name'
                            {...register('firstname', { required: true })} />
                        <p className="error">
                            {errors.firstname?.type === 'required' && 'First name is required'}
                        </p>
          </div>
          <div className='input-field' >
              <label> Last name</label>
                        <input type={'text'} id='last_name' placeholder='Enter your last name' 
                            {...register('lastname', { required: true })} />
                        <p className="error">
                            {errors.lastname?.type === 'required' && 'Last name is required'}
                        </p>
                    </div>
                    
                    </div>
          <div className='email'>
              <label> Email</label>
                    <input type={'text'} id="email" placeholder='yourname@email.com' 
                        {...register('email', { required: true })}     />
                    <p className="error">
                            {errors.email?.type === 'required' && 'Email is required'}
                        </p>
          </div>
          <div className='message'>
                <label>Message</label>
                    <textarea id='message' placeholder="Send me a message and I'll reply you as soon as possible"{...register('message', { required: true })} />  
                    <p className="error">
                            {errors.message?.type === 'required' && 'Please enter a message'}
                        </p>
                </div>
                <div  className="checkbox-container">
          <div className='checkbox'>
                    <input type={'checkbox'} 
                        {...register('checkbox', { required: true })}    />   
                    <label>You agree to providing your data to {name} who may contact you</label>
                    
                    </div>
                    <p className="error">
                            {errors.checkbox?.type === 'required' && 'Tick the box'}
                        </p>
          </div>     
        </div>
            <button id='btn__submit'>Send Message</button>
        </form>
  )
}

export default ContactForm