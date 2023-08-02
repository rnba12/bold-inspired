import "./style.scss"

export default function Post({title, author, image, featured}) {

    return (
        <div className={["post " + (featured ? "featured" : "")]}>
            <img src={image} alt={title} width={200} height={"auto"}/>
            <div className="content">
                <div className="title">{title}</div>
                <div className="author">{author}</div>
            </div>
        </div>
    )
}
