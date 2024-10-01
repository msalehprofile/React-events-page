import EventSearchBanner from '../../Component/EventSearchBanner/EventSearchBanner';
import NavigationBar from '../../Component/NavigationBar/NavigationBar';
import './Navigation.scss';


const Navigation = () => {
  return (
    <div className='navigation'>
        <NavigationBar/>
        <EventSearchBanner/>
    </div>
  )
}

export default Navigation