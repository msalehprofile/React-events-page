import "./MobileNavigation.scss";

type MobileNavigationProps = {
    handleNavHideMenuDisplay: ()
 => void;}


const MobileNavigation = ({handleNavHideMenuDisplay}: MobileNavigationProps) => {
  return (
    <div className="mobile-navigation">
      <div onClick={handleNavHideMenuDisplay} className="mobile-navigation__hamburger">
        <div className="mobile-navigation__hamburger--bar1"></div>
        <div className="mobile-navigation__hamburger--bar2"></div>
      </div>
      <h1 className="mobile-navigation__title">Menu</h1>
      <a className="mobile-navigation__links">Gigs</a>
      <a className="mobile-navigation__links">Clubs</a>
      <a className="mobile-navigation__links">Festivals</a>
      <a className="mobile-navigation__links">What's on</a>
      <a className="mobile-navigation__links">Things to do</a>
      <a className="mobile-navigation__links">Add event</a>
    </div>
  );
};

export default MobileNavigation;
