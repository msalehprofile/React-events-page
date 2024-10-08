import "./NavigationBar.scss";
import skiddleLogo from '../../assets/skiddle-logo.png'
import profileImage from '../../assets/Stand-in-profile-image.png'

type NavigationBarProps = {
  handleNavMenuDisplay: () => void;

}

const NavigationBar = ({handleNavMenuDisplay}:NavigationBarProps) => {

  return (
    <div className="navigationBar">
      <div onClick={handleNavMenuDisplay}className="navigationBar__hamburger">
        <div className="navigationBar__hamburger--bar"></div>
        <div className="navigationBar__hamburger--bar"></div>
        <div className="navigationBar__hamburger--bar"></div>
      </div>
      <div className="navigationBar__name-and-pages">
        <img className="name-and-pages__brand-name" src={skiddleLogo} alt="skiddle" />
        <div className="name-and-pages__pages">
          <h1 className="name-and-pages__pages--links">Gigs</h1>
          <h1 className="name-and-pages__pages--links">Clubs</h1>
          <h1 className="name-and-pages__pages--links">Festivals</h1>
          <h1 className="name-and-pages__pages--links">What's on</h1>
          <h1 className="name-and-pages__pages--links">Things to do</h1>
          <h1 className="name-and-pages__pages--links">Add event</h1>
        </div>
      </div>
      <img
        className="navigationBar__profile-image"
        src={profileImage}
        alt="Profile Image"
      />
    </div>
  );
};

export default NavigationBar;
