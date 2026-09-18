import { useState } from "react";
import "./CalendarButton.css";

function CalendarButton() {
    const [open, setOpen] = useState(false);

    const event = {
        title: "Märteni & Kristel pulmadi",
        description: "Ootame sind meiega seda erilist päeva tähistama!",
        location: "La Rahtla küün, Saaremaa",

        start: "20270701T120000Z",
        end: "20270701T200000Z"
    };

    function addToGoogleCalendar() {
        const url =
            "https://calendar.google.com/calendar/render?action=TEMPLATE" +
            `&text=${encodeURIComponent(event.title)}` +
            `&dates=${event.start}/${event.end}` +
            `&details=${encodeURIComponent(event.description)}` +
            `&location=${encodeURIComponent(event.location)}`;

        window.open(url, "_blank");
    }

    function addToAppleCalendar() {
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//MartenKristelWedding//EN
BEGIN:VEVENT
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsContent], {
            type: "text/calendar;charset=utf-8"
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "marten-kristel-pulmad.ics";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

    return (
        <div className="calendar">
            <button
                className="calendar-button"
                onClick={() => setOpen(!open)}
            >
                + Lisa kalendrisse
            </button>

            {open && (
                <div className="calendar-menu">
                    <button onClick={addToGoogleCalendar}>
                        Google Calendar
                    </button>

                    <button onClick={addToAppleCalendar}>
                        Apple Calendar
                    </button>
                </div>
            )}
        </div>
    );
}

export default CalendarButton;