import { useState } from "react";
import { createPortal } from "react-dom";
import "./CalendarButton.css";

function CalendarButton() {
    const [open, setOpen] = useState(false);
    const [showBrowserHelp, setShowBrowserHelp] = useState(false);

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

    function isFacebookBrowser() {
        const ua = navigator.userAgent || "";

        return (
            ua.includes("FBAN") ||
            ua.includes("FBAV") ||
            ua.includes("Messenger")
        );
    }

    function addToAppleCalendar() {
        if (isFacebookBrowser()) {
            setOpen(false);
            setShowBrowserHelp(true);
            return;
        }

        window.location.href = "/marten-kristel-pulmad.ics";
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

            {showBrowserHelp &&
                createPortal(
                    <div
                        className="browser-help-overlay"
                        onClick={() => setShowBrowserHelp(false)}
                    >
                        <div
                            className="browser-help-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3>Ava leht brauseris</h3>

                            <p>
                                Apple Calendari lisamiseks ava see leht
                                välises brauseris.
                            </p>

                            <p>
                                Vajuta <strong>paremal üleval</strong> olevale
                                nupule ja vali{" "}
                                <strong>Open in external browser</strong>.
                            </p>

                            <button
                                className="browser-help-close"
                                onClick={() => setShowBrowserHelp(false)}
                            >
                                Selge
                            </button>
                        </div>

                        <div className="browser-help-arrow">
                            ↑
                        </div>
                    </div>,
                    document.body
                )
            }
        </div>
    );
}

export default CalendarButton;