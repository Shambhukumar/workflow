import { useState } from "react"
import "./Accordian.scss";
import Chevronicon from "../Assets/svg/chevron.svg";
const Accordian =  (props) =>{
    const [isOpen, setIsOpen] = useState(false)
    const {head, text} = props.data
    return(
        <div className="accordion">
            <div className="accordion-title" onClick={()=> setIsOpen(prevstate=> !prevstate)}>
                <span>{head}</span> <img className="accordion-img" src={Chevronicon} alt="icon down" aria-expanded={!isOpen}/>
            </div>
            <div className="accordion-content" aria-expanded={!isOpen}>
               {text}
            </div>
        </div>
    )
}

export default Accordian