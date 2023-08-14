import "./style.scss"

export default function Post({props, featured}) {

    return (
        <div className={["post " + (featured ? "featured" : "")]}>
            <img src={props.image} alt={props.title}/>
            <div className="content">
                <div className="topic" style={{backgroundColor: `var(--${(props.colour)}`}}>{props.topic}</div>
                <div className="title">{props.title}</div>
                <div className="author">{props.author} &#8226; {props.date}</div>
            </div>
        </div>
    )
}
