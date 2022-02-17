import uploadIcon from "../Assets/svg/upload.svg"
import lock from "../Assets/svg/lock.svg";
import reload from "../Assets/svg/reload.svg";
import safe from "../Assets/svg/shield.svg";
import settingIcon from "../Assets/svg/settings.svg";
import DiskIcon from "../Assets/svg/disk.svg";
import "./features.scss"

const data = [
    {
        icon: uploadIcon,
        head: "Push to Deploy",
        text: " voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae"
    },
    {
        icon: lock,
        head: "SSL Certificates",
        text: " voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae"
    },
    {
        icon: reload,
        head: "Simple Queues",
        text: " voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae"
    },
    {
        icon: safe,
        head: "Advanced Security",
        text: " voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae"
    },
    {
        icon: settingIcon,
        head: "Powerful API",
        text: " voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae"
    },
    {
        icon: DiskIcon,
        head: "Database Backups",
        text: " voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae"
    }
]

const Features = () =>{
    return(
        <div className="features">
            <h3>DEPLOY FASTER</h3>
            <h2>Everything you need to deploy your app</h2>
            <span className="features-text">Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcoper malesuada Eleifend condimuntum id viverra nulla.</span>

            <div className="features-container">
            {
                data.map((e,el)=>{
                   return <Card data={e}/>
                })
            }
            </div>
        </div>
    )
}

const Card = (props) =>{
    const {icon, head, text} = props.data
    return(
        <div className="features-container-card">
            <div className="features-container-card-img"><img src={icon} alt={head}/></div>
            <div className="features-container-card-head">{head}</div>
            <div><span>{text}</span></div>
        </div>
    )
}
export default Features