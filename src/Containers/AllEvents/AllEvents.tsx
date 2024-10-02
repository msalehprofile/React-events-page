import "./AllEvents.scss";
import { eventData, EventDataType } from "../../Data/Data";
import EventCard from "../../Component/EventCard/EventCard";
import { useEffect, useState } from "react";

type AllEventsProps = {
  searchedTerm: string;
};
const AllEvents = ({ searchedTerm }: AllEventsProps) => {
  const [listedEvents, setListedEvents] = useState<EventDataType[]>([]);

  const handleEventList = () => {
    if (searchedTerm == "") {
      console.log(eventData);
      setListedEvents(eventData);
    }

    if (searchedTerm != "") {
      const filteredByEvent = listedEvents.filter(
        (event) =>
          event.eventName.toLowerCase().includes(searchedTerm.toLowerCase()) ||
          event.artists.some((artist) =>
            artist.toLowerCase().includes(searchedTerm.toLowerCase())
          ) || event.venue.toLowerCase().includes(searchedTerm.toLowerCase()) 
      );
      setListedEvents(filteredByEvent);
      console.log(filteredByEvent);
    }
  };

  useEffect(() => {
    handleEventList();
  }, [searchedTerm]);

  return (
    <>
      <div className="listed-events-page">
        <div className="listed-events-page__allevents">
          {listedEvents.map((event) => (
            <EventCard
              description={event.description}
              artists={event.artists}
              key={event.id}
              startDate={event.startDate}
              finishDate={event.finishDate}
              venue={event.venue}
              eventName={event.eventName}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllEvents;
