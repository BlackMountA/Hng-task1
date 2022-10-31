// import Button from './Butt
import slacklogo from './Slacklogo.jpg'
import githublogo from './Githublogo.jpg'
const stage1Tasks = () => {
  return (
    <>
    <section className='main-section'>
    <div className='profile-section'>
    <div className='profile__img'>
    </div>
    <div className="avatar-share-button">
        <div className="icon" ></div>
        </div>

    <div className="twitter"> 
    <p className="twitter__text">@adewoyinaanuol1</p>
    </div>

      {/* <div id="slack">
      @adewoynaanuoluwapoo
      </div> */}
      
    
    
    </div>
    <div className='link-section'>
       <a href="https://twitter.com/adewoyinaanuol1" id="links"><div className="frame5"><p className="text">Twitter Link</p></div></a>
       <a href="https://training.zuri.team/" id="btn__zuri" ><div className="frame5"><p className="text" >Zuri Team</p></div></a>
       <a href="https://books.zuri.team" id="books"><div className="frame5"><p className="text">Zuri Books</p></div></a>
       <a href="https://training.zuri.team/python-for-beginners?ref_id=<@adewoyinaanuoluwapo>" id="book__python" ><div className="frame5"><p className="text">Python Books</p></div></a>
       <a href="https://background.zuri.team" id="pitch"><div className="frame5"><p className="text">Background Check Coder</p></div></a>
       <a href="https://books.zuri.team/design-rules" id="book_design"><div className="frame5"><p className="text">Design Books</p></div></a>
      
    
    </div>
    </section>
    
    <section className='social-section'>
          <div className='social-icons'>
            <img src={slacklogo} className="slacklogo" alt='Slack Logo'/>
            <img src={githublogo} className="githublogo" alt='Github logo'/>
          </div>
    </section>
    </>
  )
}

export default stage1Tasks