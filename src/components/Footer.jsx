import facebookIcon from "./Facebook.jpg"
import linkedinIcon from "./LinkedIn.jpg"
import twitterIcon from "./Twitter(X).jpg"
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer-social-links">
            <Link to="https://www.facebook.com" target="_blank">
                <img src={facebookIcon} alt="facebook-icon"/>
            </Link>
            <Link to="https://www.linkedin.com" target="_blank">
                 <img src={linkedinIcon} alt="linkedin-icon"/>
            </Link>
            <Link to="https://www.twitter.com" target="_blank">
                <img src={twitterIcon} alt="twitter-icon"/>
            </Link>
        </div>
        
    )
}


export default Footer