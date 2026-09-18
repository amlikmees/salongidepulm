import "./Hero.css";
import weddingImage from "../assets/img.jpg";
import CalendarButton from "./CalendarButton.jsx";
import Countdown from "./Countdown.jsx";

function Hero() {
    return (
        <section id="home" className="hero">
            <img src={weddingImage} alt="Märten ja Kristel" />

            <div className="hero-overlay">
                <h1>Märten ja Kristel</h1>
                <p>1. juuli 2027</p>
                <CalendarButton />
            </div>
            <Countdown />
        </section>
    );
}

export default Hero;