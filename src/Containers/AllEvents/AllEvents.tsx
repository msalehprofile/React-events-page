import "./AllEvents.scss";
import { eventData, EventDataType } from "../../Data/Data";
import EventCard from "../../Component/EventCard/EventCard";
import { useEffect, useState } from "react";

type AllEventsProps = {
  searchedArtist: string;
  searchedEvent: string;
}
const AllEvents = ({searchedArtist, searchedEvent}: AllEventsProps) => {
  const [listedEvents, setListedEvents] = useState<EventDataType[]>([])

  const handleEventList = () => {
    if (searchedEvent =="" && searchedArtist=="") {
      console.log(eventData)
      setListedEvents(eventData)
    }

    if (searchedEvent != "") {
      const filteredByEvent = listedEvents.filter((event) => event.eventName.toLowerCase().includes(searchedEvent.toLowerCase()))
      setListedEvents(filteredByEvent)
      console.log(filteredByEvent)
     }

     if (searchedArtist != "") {
      const filteredByEvent = listedEvents.filter((event) => event.artists.some((artist) => artist.toLowerCase().includes(searchedArtist.toLowerCase())))
      setListedEvents(filteredByEvent)
      console.log(filteredByEvent)
     }
  }

  useEffect(() => {
    handleEventList()
  },[searchedEvent, searchedArtist])
 
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
