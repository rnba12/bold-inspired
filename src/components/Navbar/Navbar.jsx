import { useState } from "react"
import Menu from "../Menu/Menu"
import "./style.scss"
import Button from "../Button/Button"

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <div className="navbar">

            <div className="topnav">
                <div className="logo">BOLD INSPIRED</div>
                <div className="button" onClick={() => setMenu(prev => !prev)}>
                    <Button menu={menu}/>
                </div>
            </div>


            <nav className={menu ? "active" : ""}>
                <a href="#">ABOUT</a>
                <a href="#">BLOG</a>
                <a href="#">SUBSCRIBE</a>
            </nav>
        </div>
    )
}
