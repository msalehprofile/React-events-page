import { FormEvent, useState } from "react";
import SearchBanner from "../../Component/SearchBanner/SearchBanner";
import AllEvents from "../AllEvents/AllEvents";
import Navigation from "../Navigation/Navigation";
import "./UpcomingEvents.scss";
import SearchBar from "../../Component/SearchBar/SearchBar";
import MobileNavigation from "../../Component/MobileNavigation/MobileNavigation";

const UpcomingEvents = () => {
  const [searchedEvent, setsearchedEvent] = useState<string>("");
  const [searchedArtist, setSearchedArtist] = useState<string>("");
  const [navigationMenuView, setNavigationMenuView] = useState<boolean>(false)
  
  const handleNavMenuDisplay = () => {
    setNavigationMenuView(true)
  }

  const handleNavHideMenuDisplay = () => {
    setNavigationMenuView(false)
  }

  const handleSearchByName = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.trim().toLowerCase();
    setsearchedEvent(cleanedInput);
    console.log(cleanedInput);
  };

  const handleSearchByArtist = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.trim().toLowerCase();
    setSearchedArtist(cleanedInput);
    console.log(cleanedInput);
  };



  return (
    <div className="events-page">
      <Navigation handleNavMenuDisplay={handleNavMenuDisplay}/>
      {navigationMenuView && <MobileNavigation handleNavHideMenuDisplay={handleNavHideMenuDisplay}/>}
      <SearchBanner />
      <div className="events-page__search">
        <SearchBar
          searchTerm={searchedEvent}
          handleSearchCriteria={handleSearchByName}
          placeholder="Search by event name"
        />

        <SearchBar
          searchTerm={searchedArtist}
          handleSearchCriteria={handleSearchByArtist}
          placeholder="Search by artist"
        />
      </div>
      <AllEvents
        searchedEvent={searchedEvent}
        searchedArtist={searchedArtist}
      />
    </div>
  );
};

export default UpcomingEvents;
