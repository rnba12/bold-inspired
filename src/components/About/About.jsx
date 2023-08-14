import { useState } from "react"
import slide1 from "../../assets/slide1.webp"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpeg"
import "./style.scss"

const slides = [
    {
        tag: "Informing",
        background: "violet-eggplant",
        header: "Informing people about stuff",
        text: " Information empowers. We provide our readers with information on a variety of topics, so they can make informed decisions about their lives.",
        image: slide1
    },
    {
        tag: "Inspiring",
        background: "sunglow",
        header: "Inspiring the youth",
        text: "Stories inspire. We feature stories about people who are making a difference in the world, and we provide articles on self-improvement and personal growth.",
        image: slide2
    },
    {
        tag: "Illuminating",
        background: "piction-blue",
        header: "Illuminating ppls minds",
        text: "Practical knowledge helps people succeed. We provide our readers with resources on topics such as finances, careers, health, and relationships.",
        image: slide3
    }
]

export default function About() {

    const [slide, setSlide] = useState(0)

    const changeSlide = (num) => {
        setSlide(prev => prev + num)
    }
    
    return (
        <section className="about">
            <h2 data-aos="fade">Your new favourite magazine</h2>
            <div className="columns" data-aos="fade">
            <p>Inspired by the power of stories, information, and practical knowledge to inspire, illuminate, and inform our readers. We feature stories about people who are making a difference in the world, provide information on a variety of topics, and offer resources on topics such as finances, careers, health, and relationships.
            </p>
            <p>We provide new stories weekly from a variety of authors, so our readers can always find something new to read. We believe that everyone has a story to tell, and we want to give a platform to Gen Z voices. Our authors are diverse in terms of their backgrounds, experiences, and perspectives.</p>
            </div>
            <h2 data-aos="fade">Our Values</h2>
            <div className="about-content" data-aos="fade">
                <button disabled={slide === 0} onClick={() => changeSlide(-1)}><iconify-icon icon="mdi:arrow-left"></iconify-icon></button>
                <img src={slides[slide].image} alt="slide" />
                <div style={{color: `var(--${slides[slide].background})`}}>
                    <h4>{slides[slide].tag}</h4>
                    <p >{slides[slide].text}</p>
                </div>
                <button disabled={slide === 2} onClick={() => changeSlide(1)}><iconify-icon icon="mdi:arrow-right"></iconify-icon></button>
            </div>
            
        </section>
    )
}
