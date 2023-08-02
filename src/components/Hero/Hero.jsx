import { useState } from "react"
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import "./style.scss"

export default function Hero() {

    const [slide, setSlide] = useState(slide1)

    const changeSlide = (slideNum) => {
        setSlide(slideNum)
    }
    
    return (
        <div className="page-hero">
            <div className="hero-tags">
                <div className="tag" onMouseOver={() => changeSlide(slide1)}>Informing</div>
                <div className="tag" onMouseOver={() => changeSlide(slide2)}>Inspiring</div>
                <div className="tag" onMouseOver={() => changeSlide(slide3)}>Illuminating</div>
            </div>
            <img src={slide} alt="slide" width={"100%"} height={"auto"} />
        </div>
    )
}
