import Footer from './Footer';
import Heading from './Contactheading';
import Form from './Contactform';
import "./Contactstyle.css"

const Contact = () => {
  return (
    <body>
      <div className='contactpageheader'>
        <div className='container'>
          <div className='content2'>
            <Heading />
            <Form />
          </div>
          
        </div>
      </div>
       <Footer />
    </body>
  )
}

export default Contact