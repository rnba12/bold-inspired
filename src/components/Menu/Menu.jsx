import "./style.scss"

export default function Menu() {

    return (
        <div className="menu">
            <nav>
                <div>
                    <a href="#">About</a>
                    <a href="#">Sign Up</a>
                    <a href="#">Blog</a>
                </div>
                <div>
                    <span>Topics</span>
                    <a href="#">Movies</a>
                    <a href="#">Music</a>
                    <a href="#">Culture</a>
                    <a href="#">Fashion</a>
                </div>
            </nav>
        </div>
    )
}
