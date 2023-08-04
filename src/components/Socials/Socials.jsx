export default function Socials() {

    return (
        <section className="socials">
            <h3>Follow us</h3>
            <ul>
                <li><iconify-icon icon="bxl:instagram"></iconify-icon></li>
                <li><iconify-icon icon="bxl:twitter"></iconify-icon></li>
                <li><iconify-icon icon="bxl:facebook"></iconify-icon></li>
                <li><iconify-icon icon="bxl:tiktok"></iconify-icon></li>
            </ul>
            <p>Subscribe to our newsletter and get updated weekly</p>
            <form>
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </form>
        </section>

    )
}
