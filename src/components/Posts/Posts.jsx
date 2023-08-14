import Post from '../Post/Post'
import "./style.scss"
import posts from '../../posts.json'

export default function Posts() {

    return (
        <section>
            <div className="posts">
                <div className="feature-post">
                    <Post props={posts[1]} featured={true}/>
                </div>
                <div className='other-posts'>
                    <Post props={posts[4]}/>
                    <Post props={posts[2]}/>
                    <Post props={posts[3]}/>
                </div>
            </div>
        </section>
    )
}
