import { useEffect, useState } from "react";
import "./EventCard.scss";
import Button from "../Button/Button";

type EventCardProps = {
  eventName: string;
  venue: string;
  imageURL: string;
  startDate: string;
  description: string;
  artists: string[];
};

const EventCard = ({
  eventName,
  venue,
  imageURL,
  description,
  startDate,
  artists,
}: EventCardProps) => {
  const [formattedStartDate, setFormattedStartDate] = useState<string>("");
  const [formattedStartTime, setFormattedStartTime] = useState<string>("");
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  const formatDate = () => {
    const splitDate = startDate.split("T");
    const date = splitDate[0].slice(8);
    const month = splitDate[0].slice(5, 7);
    const year = splitDate[0].slice(0, 4);

    setFormattedStartDate(date + " / " + month + " / " + year);
    setFormattedStartTime(splitDate[1]);
  };

  const handleShowMoreInfo = () => {
    setShowMoreInfo(true);
  };

  const handleShowLessInfo = () => {
    setShowMoreInfo(false);
  };

  useEffect(() => {
    formatDate();
  }, []);

  return (
    <div className="event-card">
      {!showMoreInfo && (
        <div className="event-card__topline">
          <img className="topline__image" src={imageURL} alt="" />
          <h1 className="topline__name">{eventName}</h1>
          <p className="topline__venue">{venue}</p>
          <p className="topline__date">{formattedStartDate}</p>
          <p className="topline__time">{formattedStartTime}</p>
        </div>
      )}

      {showMoreInfo && (
        <div className="event-card__details">
          <h1 className="details__name">{eventName}</h1>
          <p className="details__desc">{description}</p>
          <h1 className="details__title">Artists:</h1>
          {artists.map((artist) => (
            <Button size="medium" color="primary" label={artist} />
          ))}
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
