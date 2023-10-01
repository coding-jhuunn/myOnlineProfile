import ProfilePic from '../PictureAndIcons/profildID.jpg';
import GitHubIcon from '../PictureAndIcons/githubIcon.svg';
import LinkedInIcon from '../PictureAndIcons/linkedinIcon.svg';



const Profile = ()=>{
    return (
        <>
        <section id="section--profile" className="section--profile" >
            <div className="section--profile--box">
                <div className="section--profile--profilepic">
                    <img src={ProfilePic} alt='' className='section--profile--img'></img>
                </div>
                <div className="section--profile--info">
                    <h1 className='section--profile--info-name'>Castillo, Aljhun C.</h1>
                    <h3 className='section--profile--info-position'>Front-End Web Developer</h3>
                    <h4 className='section--profile--info-email'>aljhun.castillo14@gmail.com</h4>
                </div>
                <div className="section--profile--link">
                    <div className='section--profile--link--icon'>
                        <a href="https://github.com/coding-jhuunn" target="_blank" rel="noopener noreferrer">
                            <img src={GitHubIcon} alt="" className='section--profile--link--img'/>
                        </a>
                    </div>
                    <div className='section--profile--link--icon'> 
                        <a href="https://www.linkedin.com/in/aljhun-c-641712287/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="" className='section--profile--link--img'/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default Profile;