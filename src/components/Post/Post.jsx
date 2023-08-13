import "./style.scss"

export default function Post({props}) {

    return (
        <div className={["post " + (props.body ? "featured" : "")]}>
            <img src={props.image} alt={props.title} width={200} height={"auto"}/>
            <div className="content">
                <div className="topic">{props.topic}</div>
                <div className="title">{props.title}</div>
                <div className="author">{props.author}</div>
            </div>
                <div>{props.body}</div>
        </div>
    )
}
