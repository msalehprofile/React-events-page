import EventSearchBanner from '../../Component/EventSearchBanner/EventSearchBanner';
import NavigationBar from '../../Component/NavigationBar/NavigationBar';
import './Navigation.scss';

type NavigationProps = {
  handleNavMenuDisplay: () => void;
}
const Navigation = ({handleNavMenuDisplay}: NavigationProps) => {
  return (
    <div className='navigation'>
        <NavigationBar handleNavMenuDisplay={handleNavMenuDisplay}/>
        <EventSearchBanner/>
    </div>
  )
}

export default Navigation