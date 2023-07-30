export default function Post({title, author, image, topic}) {

    return (
        <div className="post">
            <img src={image} alt={title} width={200} height={"auto"}/>
            <span className="topic">{topic}</span>
            <div className="title">{title}</div>
            <div className="author">{author}</div>
        </div>
    )
}
