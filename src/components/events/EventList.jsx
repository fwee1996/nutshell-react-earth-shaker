// EventList.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEvents } from "../../services/eventService.jsx";
import "./Events.css";
import { Event } from "./Events.jsx";

export const EventList = ({ currentUser }) => {
    const [allEvents, setAllEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getAndSetEvents = () => {
        getAllEvents().then((eventsArray) => {
            setAllEvents(eventsArray);
            setFilteredEvents(eventsArray);
        });
    };

    useEffect(() => {
        getAndSetEvents();
    }, [currentUser]);

    useEffect(() => {
        const foundEvents = allEvents.filter((event) =>
            event.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEvents(foundEvents);
    }, [searchTerm, allEvents]);

    return (
        <div className="events-container">
            <h2>Events</h2>
            <Link to="/events/new" className="btn btn-primary">Create New Event</Link>
            <input
                type="text"
                placeholder="Search events..."
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <article className="events">
                {filteredEvents.map((eventObject) => {
                    return (
                        <Event
                            event={eventObject}
                            currentUser={currentUser}
                            getAndSetEvents={getAndSetEvents}
                            key={eventObject.id}
                        />
                    );
                })}
            </article>
        </div>
    );
};
