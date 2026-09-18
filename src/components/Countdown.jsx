import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
    const weddingDate = new Date("2027-07-01T00:00:00+03:00");

    const calculateTimeLeft = () => {
        const difference = weddingDate.getTime() - new Date().getTime();

        if (difference <= 0) {
            return null;
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),
            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),
            seconds: Math.floor(
                (difference / 1000) % 60
            )
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        return (
            <div className="countdown">
                <p className="countdown-finished">Täna on meie päev! ♡</p>
            </div>
        );
    }

    return (
        <div className="countdown">
            <div className="countdown-item">
                <span>{timeLeft.days}</span>
                <p>Päeva</p>
            </div>

            <div className="countdown-item">
                <span>{timeLeft.hours}</span>
                <p>Tundi</p>
            </div>

            <div className="countdown-item">
                <span>{timeLeft.minutes}</span>
                <p>Minutit</p>
            </div>

            <div className="countdown-item">
                <span>{timeLeft.seconds}</span>
                <p>Sekundit</p>
            </div>
        </div>
    );
}

export default Countdown;