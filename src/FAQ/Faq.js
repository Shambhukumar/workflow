import Accordian from "../Accodian/Accordian";
import "./faq.scss";
const data = [

    {
        head: "What's the best thing about Switzerland?",
        text: "I dont't know but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipscing elit. Quas cupiditate laboriosam fugiat."
    },

    {
        head: "How do you make holy water?",
        text: "I dont't know but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipscing elit. Quas cupiditate laboriosam fugiat."
    },

    {
        head: "What do you call someone with no body and no nose?",
        text: "I dont't know but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipscing elit. Quas cupiditate laboriosam fugiat."
    },

    {
        head: "why do you never see elephants hiding in trees?",
        text: "I dont't know but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipscing elit. Quas cupiditate laboriosam fugiat."
    },

    {
        head: "Why can't you hear a pterodacty! go to the bathroom?",
        text: "I dont't know but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipscing elit. Quas cupiditate laboriosam fugiat."
    },

    {
        head: "Why did the invisible man turn down the job offer?",
        text: "I dont't know but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipscing elit. Quas cupiditate laboriosam fugiat."
    },
    
]
const Faq = () =>{
    return(<div className="faq">
        <div className="faq-container">
            <h1>Frequently asked questions</h1>
        {data.map((e,el)=>{
            return <Accordian data={e}/>
        })}
        </div>
    </div>)
}

export default Faq;