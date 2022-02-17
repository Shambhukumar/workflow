import "./footer.scss";
import Logo from "../Assets/img/logo.png";
import facebook from  "../Assets/svg/facebook.svg";
import twitter from "../Assets/svg/twitter.svg";
import instagram from "../Assets/svg/instagram.svg";
import github from "../Assets/svg/github.svg";
import basket from "../Assets/svg/basket.svg";
const Footer =()=>{

    return(
        <div className="footer">
            <div className="footer-top">
            <div className="footer-left">
                <img src={Logo} alt="logo"/>
                <span>
                    Making the world a better place through constructing elegant hierarchies.
                </span>
                <div className="footer-social">
                    <img src={facebook} alt="facebook"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={github} alt="github"/>
                    <img src={basket} alt="basket"/>
                </div>
            </div>
            <div className="footer-right">
                <ul>
                    <li className="footer-right-head">SOLUTIONS</li>
                    <li>Marketing</li>
                    <li>Analytics</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
                <ul>
                    <li className="footer-right-head">SUPPORT</li>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API Status</li>
                </ul>
                <ul>
                    <li className="footer-right-head">COMPANY</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Partners</li>
                </ul>
                <ul className="list">
                    <li className="footer-right-head">LEGAL</li>
                    <li>Claim</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>

            </div>
            </div>
            <div className="footer-bottom">
                <span>&copy; 2020 Workflow, Inc. All rights reserved.</span>

            </div>
        </div>
    )
}

export default Footer;
