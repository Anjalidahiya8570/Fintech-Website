import React, { useState } from "react";
import { Tilt } from "react-tilt";
import EventData from "./EventData";
import SampleImg from "./art-woc.jpg";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {EventData.map((event, index) => (
        <Tilt key={index} className="tilt" options={{ scale: 1.02, max: 15 }}>
          <div
            className="border border-gray-300 rounded-lg shadow-xl m-4 overflow-hidden w-72"
            onClick={() => handleCardClick(event)}
          >
            <img
              className="w-full h-48 object-cover"
              src={SampleImg}
              alt={event.eventName}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{event.eventName}</h2>
              <p className="text-base mb-2">{event.eventDescription}</p>
              <p className="text-sm mb-1">Presenter: {event.eventPresenter}</p>
              <p className="text-sm">Date: {event.eventDate}</p>
            </div>
          </div>
        </Tilt>
      ))}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
          <div className="bg-white rounded-lg shadow-md w-[90%] h-[60%] max-w-3xl mx-4 overflow-hidden">
            <div className="flex justify-end p-2 ">
              <button
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={handleCloseModal}
              >
                {/* Use an SVG or any other icon for the close button */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col md:flex-row p-4">
              <img
                className="w-full md:w-1/2 h-auto"
                src={SampleImg}
                alt={selectedEvent.eventName}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  {selectedEvent.eventName}
                </h2>
                <p className="text-base mb-2">
                  {selectedEvent.eventDescription}
                </p>
                <p className="text-sm mb-1">
                  Presenter: {selectedEvent.eventPresenter}
                </p>
                <p className="text-sm">Date: {selectedEvent.eventDate}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
