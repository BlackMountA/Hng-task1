import IG4 from "./IG4.jpg"
const Footer = () => {
  return (
    <footer>
    <div className="footer__container">
        <p className="zuri-internship">Zuri <span>.</span>Internship</p>
        <p  className="footer__text" >HNG Internship 9 Frontend Task</p>
        <img src={IG4}  alt='Slack Logo'/>
        </div>
    </footer>
  )
}

export default Footer