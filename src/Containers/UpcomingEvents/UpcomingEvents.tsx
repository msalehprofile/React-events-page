import EventSearchBanner from '../../Component/EventSearchBanner/EventSearchBanner';
import NavigationBar from '../../Component/NavigationBar/NavigationBar';
import './UpcomingEvents.scss';


const UpcomingEvents = () => {
  return (
    <div className='events-page'>
        <NavigationBar/>
        <EventSearchBanner/>
    </div>
  )
}

export default UpcomingEvents