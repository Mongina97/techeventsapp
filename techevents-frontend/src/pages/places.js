import React, { useState, useEffect } from "react";

import PlaceList from "../components/PlaceList";

const EventPlaces = () => {
  const [loading, setLoading] = useState(true);
  const [loadEvents, setLoadEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/events");
        const eventsData = await response.json();
        setLoadEvents(eventsData);
      } catch (err) {
        console.error(err.message);
      }
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      {loading && <h2>Loading Events...</h2>}
      {!loading && <PlaceList items={loadEvents} />}
    </div>
  );
};

export default EventPlaces;
