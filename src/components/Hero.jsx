import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"

export default function Hero() {
    
    return (
        <div className="page-hero">
            <div className="hero-tags">
                <div>Informing</div>
                <div>Inspiring</div>
                <div>Illuminating</div>
            </div>
            <img src={slide2} alt="slide" width={200} height={"auto"} />
        </div>
    )
}
