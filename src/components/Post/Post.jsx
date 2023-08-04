import "./style.scss"

export default function Post({title, author, topic, image, body}) {

    return (
        <div className={["post " + (body ? "featured" : "")]}>
            <img src={image} alt={title} width={200} height={"auto"}/>
            <div className="content">
                <div className="topic">{topic}</div>
                <div className="title">{title}</div>
                <div className="author">{author}</div>
            </div>
                <div>{body}</div>
        </div>
    )
}
