import "./style.scss"

export default function Button({menu}) {

    return (
        <div className={"nav-btn " + (menu ? "opened" : "")}>
            <div className="line"></div>
        </div>
    )
}
