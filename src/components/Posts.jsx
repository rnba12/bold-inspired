import Post from './Post'

export default function Posts() {
    
    return (
        <>
            <h2>Latest</h2>
            <div className="posts">
                <Post title={"Article Title"} author={"Author Name"} topic={"Topic"} image={"src/assets/slide2.jpg"}/>
                <Post title={"Article Title"} author={"Author Name"} topic={"Topic"} image={"src/assets/slide2.jpg"}/>
                <Post title={"Article Title"} author={"Author Name"} topic={"Topic"} image={"src/assets/slide2.jpg"}/>
                <Post title={"Article Title"} author={"Author Name"} topic={"Topic"} image={"src/assets/slide2.jpg"}/>
                <Post title={"Article Title"} author={"Author Name"} topic={"Topic"} image={"src/assets/slide2.jpg"}/>
                <Post title={"Article Title"} author={"Author Name"} topic={"Topic"} image={"src/assets/slide2.jpg"}/>
            </div>
        </>
    )
}
