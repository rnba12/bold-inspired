import Post from '../Post/Post'
import "./style.scss"
import posts from '../../posts.json'

export default function Posts() {

    return (
        <section style={{padding: "0 2.5rem"}}>
            <h2>Latest</h2>
            <div className="posts">
                <div className="feature-post">
                    <Post props={posts[0]}/>
                </div>
                <div>
                    <Post props={posts[1]}/>
                    <Post props={posts[2]}/>
                </div>
            </div>
        </section>
    )
}
