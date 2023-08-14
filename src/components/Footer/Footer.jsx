import "./style.scss"

export default function Footer() {

    return (
        <footer>
           <div className="footer-logo">
            <span>BOLD INSPIRED</span> ©<br/>Inspiring, Informing, Illuminating
           </div>
           <div className="footer-content">
            <div className="links">
                <ul>
                    <li>About</li>
                    <li>Subscribe</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Sitemap</li>
                    <li>Privacy</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="socials">
                <span><iconify-icon icon="bxl:instagram"></iconify-icon></span>
                <span><iconify-icon icon="bxl:twitter"></iconify-icon></span>
                <span><iconify-icon icon="bxl:facebook"></iconify-icon></span>
                <span><iconify-icon icon="bxl:tiktok"></iconify-icon></span>
                <span><iconify-icon icon="bxl:youtube"></iconify-icon></span>
            </div>
           </div>

        </footer>
    )
}
