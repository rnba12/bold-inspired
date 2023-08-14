import Post from '../Post/Post'
import "./style.scss"
import posts from '../../posts.json'
import pic1 from '../../assets/stock1.jpg'
import pic2 from '../../assets/stock3.webp'
import pic3 from '../../assets/stock4.jpeg'
import pic4 from '../../assets/stock5.webp'

export default function Posts() {

    return (
        <section>
            <div className="posts">
                <div className="feature-post">
                    <Post props={posts[1]} featured={true} image={pic1}/>
                </div>
                <div className='other-posts'>
                    <Post props={posts[4]} image={pic4}/>
                    <Post props={posts[2]} image={pic2}/>
                    <Post props={posts[3]} image={pic3}/>
                </div>
            </div>
        </section>
    )
}
