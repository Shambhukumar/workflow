import "./testomonie.scss";
import TestimonImg from "../Assets/img/testomonie.jpg";
const Testomonie = () =>{
    return(
        <div className="testomonie">
            <div className="testomonie-image">
                <img src={TestimonImg} alt="testimoni"/>
            </div>
            <div className="testomonie-text">
                <span className="testomonie-text-quate">&#34;</span>
                <span className="testomonie-text-head">Lorem ipsum dolor sit amet, consectetur adipscing elit. Sed urna nulla vitae laoreet augua. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit</span>
                <div className="testomonie-text-name">
                    <span>Judith Black</span>
                    <span className="testomonie-text-name-sername">CEO at PureInsights</span>
                </div>
            </div>
        </div>
    )
}
export default Testomonie;