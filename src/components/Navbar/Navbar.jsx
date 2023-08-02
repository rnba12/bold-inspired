import { useState } from "react"
import Menu from "../Menu/Menu"
import "./style.scss"

export default function Navbar() {

    const [menu, setMenu] = useState(false)

    return (
        <div className="navbar">
            <h1>Bold Inspired</h1>
            {menu && <Menu/>}
            <button onClick={() => setMenu(prev => !prev)}>
                {menu ? <iconify-icon icon="mdi:close"></iconify-icon> : <iconify-icon icon="material-symbols:menu"></iconify-icon>}
                
                </button>
        </div>
    )
}
