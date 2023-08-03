import "./style.scss"

export default function Menu({ show }) {

    return (
        <div className="menu" style={{display: show ? "block" : "none"}}>
            <nav>
                <div>
                    <a href="#">About</a>
                    <a href="#">Sign Up</a>
                    <a href="#">Blog</a>
                </div>
            </nav>
        </div>
    )
}
