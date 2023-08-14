import "./style.scss"

export default function Subscribe() {

    return (
        <section className="subscribe">
            <div>
                <h4>DONT MISS AN UPDATE</h4>
                <p>Subscribe to our newsletter and get new stories directly to your inbox.</p>
            </div>
            <form>
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </form>
        </section>

    )
}
