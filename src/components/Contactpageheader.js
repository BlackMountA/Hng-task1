import ContactForm from './Contactform'
import Contactheading from './Contactheading'
const Contactpageheader = () => {
  return (
      <div className='Contactpageheader'>
          <div className='container'>
                <div className='content2'>
                    <Contactheading />
                    <ContactForm />
                </div>
            </div>
        </div>
  )
}

export default Contactpageheader