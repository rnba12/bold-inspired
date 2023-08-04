import Post from '../Post/Post'
import "./style.scss"

export default function Posts() {

    return (
        <section style={{padding: "0 2.5rem"}}>
            <h2>Latest</h2>
            <div className="posts">
                <div className="feature-post" style={{ gridArea: "p2" }}>
                    <Post title={"Featured Post"} author={"Author Name"} topic={"Culture"} image={"src/assets/slide3.jpg"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vero omnis optio nemo modi. Molestias perspiciatis, hic sed maiores nobis omnis illum provident, inventore impedit ipsa accusantium? Pariatur, temporibus officia!"} />
                </div>

                <div style={{gridArea: "p1"}}>
                    <Post title={"Random Post Title 1"} author={"Author Name"} topic={"Sport"} image={"src/assets/slide2.jpg"} body={false}
                    />
                </div>
                <div style={{gridArea: "p3"}}>
                    <Post
                        title={"Post 2"}
                        author={"Author Name"}
                        topic={"Music"}
                        image={"src/assets/stock2.jpg"}
                        body={false}
                    />
                </div>
                <div style={{gridArea: "p4"}}>
                    <Post
                        title={"Post 3"}
                        author={"Author Name"}
                        topic={"Culture"}
                        image={"src/assets/stock4.jpg"}
                        body={false} />
                </div>
                <div style={{gridArea: "p5"}}>
                    <Post
                        title={"Post 4"}
                        author={"Author Name"}
                        topic={"Culture"}
                        image={"src/assets/stock1.webp"}
                        body={false} />
                </div>
            </div>

        </section>
    )
}
