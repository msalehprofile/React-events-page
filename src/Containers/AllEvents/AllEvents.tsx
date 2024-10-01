import './AllEvents.scss';
import { eventData } from '../../Data/Data';
import EventCard from '../../Component/EventCard/EventCard';

const AllEvents = () => {
    

  return (
    <div className='allevents'>
        {eventData.map((event) => <EventCard description={event.description} artists={event.artists} key={event.id} startDate={event.startDate} venue={event.venue} eventName={event.eventName} imageURL={event.imageUrl} />)}
    </div>
  )
}

export default AllEvents