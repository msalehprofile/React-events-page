import { FormEvent, useState } from "react";
import SearchBanner from "../../Component/SearchBanner/SearchBanner";
import AllEvents from "../AllEvents/AllEvents";
import Navigation from "../Navigation/Navigation";
import "./UpcomingEvents.scss";
import SearchBar from "../../Component/SearchBar/SearchBar";
import MobileNavigation from "../../Component/MobileNavigation/MobileNavigation";
import Footer from "../../Component/Footer/Footer";

const UpcomingEvents = () => {
  const [searchedTerm, setsearchedTerm] = useState<string>("");
  const [navigationMenuView, setNavigationMenuView] = useState<boolean>(false)
  
  const handleNavMenuDisplay = () => {
    setNavigationMenuView(true)
  }

  const handleNavHideMenuDisplay = () => {
    setNavigationMenuView(false)
  }

  const handleSearchCriteria = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.trim().toLowerCase();
    setsearchedTerm(cleanedInput);
    console.log(cleanedInput);
  };

  return (
    <div className="events-page">
      <Navigation handleNavMenuDisplay={handleNavMenuDisplay}/>
      {navigationMenuView && <MobileNavigation handleNavHideMenuDisplay={handleNavHideMenuDisplay}/>}
      <SearchBanner />
      <div className="events-page__search">
        <SearchBar
          searchTerm={searchedTerm}
          handleSearchCriteria={handleSearchCriteria}
          placeholder="Search by event name, location or artist"
        />

      </div>
      <AllEvents
        searchedTerm={searchedTerm}
      />
      <Footer/>
    </div>
  );
};

export default UpcomingEvents;
