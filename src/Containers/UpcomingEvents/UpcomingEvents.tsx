

import AllEvents from '../AllEvents/AllEvents';
import Navigation from '../Navigation/Navigation';
import './UpcomingEvents.scss';


const UpcomingEvents = () => {
  return (
    <div className='events-page'>
        <Navigation/>
        <AllEvents/>
    </div>
  )
}

export default UpcomingEvents