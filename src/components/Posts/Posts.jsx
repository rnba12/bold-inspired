import Post from '../Post/Post'
import "./style.scss"

export default function Posts() {
    
    return (
        <>
            <h2>Latest</h2>
            <div className="posts">
                <div className="feature-post">
                    <Post title={"Featured Post"} author={"Author Name"} image={"src/assets/stock1.webp"} featured={true}/>
                </div>
                <div className="other-posts">
                    <Post title={"Random Post Title 1"} author={"Author Name"} image={"src/assets/stock3.jpg"} featured={false}/>
                    <Post title={"Post 2"} author={"Author Name"} image={"src/assets/stock2.jpg"} featured={false}/>
                    <Post title={"Post 3"} author={"Author Name"} image={"src/assets/stock4.jpg"} featured={false}/>
                    <a href="#" className='more-btn'>See More <iconify-icon icon="ph:arrow-right-bold"></iconify-icon></a>
                </div>
            </div>
        </>
    )
}
