import { useEffect, useState } from "react";
import "./EventCard.scss";
import Button from "../Button/Button";

type EventCardProps = {
  eventName: string;
  venue: string;
  imageUrl: string;
  startDate: string;
  finishDate: string;
  description: string;
  artists: string[];
};

const EventCard = ({
  eventName,
  venue,
  imageUrl,
  description,
  startDate,
  finishDate,
  artists,
}: EventCardProps) => {
  const [formattedStartDate, setFormattedStartDate] = useState<string>("");
  const [formattedStartTime, setFormattedStartTime] = useState<string>("");
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
  const [allArtists, setAllArtists] = useState<string>("");

  const formatDate = () => {
    const splitDate = startDate.split("T");
    const date = splitDate[0].slice(8);
    const month = splitDate[0].slice(5, 7);
    const year = splitDate[0].slice(0, 4);

    setFormattedStartDate(date + " / " + month + " / " + year);
    setFormattedStartTime(splitDate[1]);
  };

  const handleArtistList = () => {
    let artistList = "";
    artists.forEach((artist) => (artistList = artistList + artist + ", "));
    setAllArtists(artistList.slice(0, artistList.length - 2));
  };

  const handleShowMoreInfo = () => {
    setShowMoreInfo(true);
  };

  const handleShowLessInfo = () => {
    setShowMoreInfo(false);
  };

  useEffect(() => {
    formatDate();
    handleArtistList();
  }, []);

  return (
    <div className="event-card">
      {!showMoreInfo && (
        <div className="event-card__topline">
          <img className="topline__image" src={imageUrl} alt="" />
          <h1 className="topline__name">{eventName}</h1>
          <p className="topline__detail"><span className="topline__detail--bold">Where: </span>{venue}</p>
          <p className="topline__detail"><span className="topline__detail--bold">Date:  </span>{formattedStartDate}</p>
          <p className="topline__detail"><span className="topline__detail--bold">Time:  </span> {formattedStartTime.slice(0, 5)} - {finishDate.slice(11,16)}</p>
        </div>
      )}

      {showMoreInfo && (
        <div className="event-card__details">
          <h1 className="details__name">{eventName}</h1>
          <p className="details__desc">{description}</p>
          <h1 className="details__title">Artists:</h1>
          <p>{allArtists}</p>
        </div>
      )}

      <div className="event-card__buttons">
        <Button size="large" color="secondary" label="Buy Ticket" />

        {!showMoreInfo && (
          <Button
            size="large"
            color="secondary"
            onClick={handleShowMoreInfo}
            label="More info"
          />
        )}

        {showMoreInfo && (
          <Button
            size="large"
            color="secondary"
            onClick={handleShowLessInfo}
            label="Less info"
          />
        )}
      </div>
    </div>
  );
};

export default EventCard;
