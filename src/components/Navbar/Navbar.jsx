import { useState } from "react"
import Menu from "../Menu/Menu"
import "./style.scss"
import Button from "../Button/Button"

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <div className="navbar">
            <h1>Bold Inspired</h1>
            <Menu show={menu}/>
            <button onClick={() => setMenu(prev => !prev)}>
                <Button menu={menu}/>    
            </button>
        </div>
    )
}
