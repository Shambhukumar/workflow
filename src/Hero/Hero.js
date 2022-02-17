import Header from "../Header/Header";
import "./hero.scss"
import HeroImg from "../Assets/svg/Logo-hero.svg";
const Hero = () =>{
    return(
        <div className="hero">
            <Header/>
            <div className="hero-container">
            <div className="hero-left">
                <div className="hero-left-top">
                    <span className="hero-left-top-1">WE'RE HIRING</span>
                    <span className="hero-left-top-2">Visit our carreers page</span>
                </div>
                <div className="hero-left-text">
                    <span  className="hero-left-text-1">A better way to </span>
                    <span  className="hero-left-text-2">Ship web apps</span>
                </div>
                <span className="hero-left-mid">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fagiat.
            
                </span>

                <div className="hero-left-input">
                    <input type="email" placeholder="Enter your email"/> <span> Start free trial</span>

                </div>
                <span className="hero-left-desclamer">Start your free 14-day trial, no credit card necessary. by providing your email, you agree to our <span> terms of service.</span> </span>
            </div>
            <div className="hero-right">
                <img src={HeroImg} alt="hero side"/>
            </div>
            </div>
        </div>
    )
}

export default Hero;