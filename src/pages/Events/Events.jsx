import React, { useState } from 'react';
import EventData from './EventData';
import './Events.css'; // Import CSS file for styling
import SampleImg from "./art-woc.jpg"

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="events-container">
      {EventData.map((event, index) => (
        <div key={index} className="event-card" onClick={() => handleCardClick(event)}>
          <img className="event-image" src={SampleImg} alt={event.eventName} />
          <div className="event-details">
            <h2 className="event-name">{event.eventName}</h2>
            <p className="event-description">{event.eventDescription}</p>
            <p className="event-info">Presenter: {event.eventPresenter}</p>
            <p className="event-info">Date: {event.eventDate}</p>
          </div>
        </div>
      ))}
      {selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <div className="modal-details">
              <img className="modal-image" src={SampleImg} alt={selectedEvent.eventName} />
              <div className="modal-text">
                <h2 className="event-name">{selectedEvent.eventName}</h2>
                <p className="event-description">{selectedEvent.eventDescription}</p>
                <p className="event-info">Presenter: {selectedEvent.eventPresenter}</p>
                <p className="event-info">Date: {selectedEvent.eventDate}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
