import { useState } from "react"
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import "./style.scss"

export default function About() {

    const [slide, setSlide] = useState(slide1)

    const changeSlide = (slideNum) => {
        setSlide(slideNum)
    }
    
    return (
        <section className="about">
            <div className="about-tags">
                <div className="tag" onMouseOver={() => changeSlide(slide1)}>Informing</div>
                <div className="tag" onMouseOver={() => changeSlide(slide2)}>Inspiring</div>
                <div className="tag" onMouseOver={() => changeSlide(slide3)}>Illuminating</div>
            </div>
            <img src={slide} alt="slide" />
        </section>
    )
}
