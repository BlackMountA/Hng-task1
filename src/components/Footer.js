import IG4 from "./IG4.jpg"
import zuriLogo from "./ZuriLogo.jpg"

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <img src={zuriLogo} id ="board-name" alt="Zuri-Internship Logo" />
        <p  id="footer__text" >HNG Internship 9 Frontend Task</p>
        <img src={IG4}  alt='IG4 Logo'/>
      </div>
    </footer>
  )
}

export default Footer