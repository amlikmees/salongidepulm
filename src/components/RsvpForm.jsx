import "./RsvpForm.css";
import { useState } from "react";

function RsvpForm() {
    const [formData, setFormData] = useState({
        name: "",
        attending: "yes",
        guests: 1,
        dietary: "",
        message: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log("RSVP:", formData);

        alert("Aitäh vastamast!");
    }

    return (
        <section id="rsvp" className="rsvp">
            <div className="rsvp-container">
                <h2>RSVP</h2>
                <p>Palun anna meile teada, kas tuled.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nimi</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Sinu nimi"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Kas tuled pulma?</label>

                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="attending"
                                    value="yes"
                                    checked={formData.attending === "yes"}
                                    onChange={handleChange}
                                />
                                Jah
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="attending"
                                    value="no"
                                    checked={formData.attending === "no"}
                                    onChange={handleChange}
                                />
                                Kahjuks ei
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="guests">Mitu inimest tuleb?</label>

                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            min="1"
                            max="10"
                            value={formData.guests}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dietary">
                            Toitumispiirangud
                        </label>

                        <input
                            type="text"
                            id="dietary"
                            name="dietary"
                            value={formData.dietary}
                            onChange={handleChange}
                            placeholder="Näiteks taimetoitlane"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Lisainfo</label>

                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Midagi, mida soovid meile teada anda..."
                            rows="4"
                        />
                    </div>

                    <button type="submit">
                        Saada vastus
                    </button>
                </form>
            </div>
        </section>
    );
}

export default RsvpForm;