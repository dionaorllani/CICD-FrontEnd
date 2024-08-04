import React from "react";
import { Image, Button } from "react-bootstrap";
import {
  BsCalendarCheck,
  BsPinAngle,
  BsPeople,
  BsHandThumbsUp,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

const EventCard = ({ imageSrc, title, date, location, attendees }) => {
  const { theme } = useTheme();

  return (
    <div className="col-md-5 mx-auto">
      <div className="border rounded">
        <Image
          src={imageSrc}
          fluid
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div className="p-3">
          <Link
            to="1"
            className={`text-decoration-none text-${
              theme === "light" ? "dark" : "light"
            }`}
          >
            <h5 className="mb-2">{title}</h5>
          </Link>

          <div className="d-flex flex-column gap-2 mb-3">
            <div className="d-flex align-items-center gap-2">
              <BsCalendarCheck />
              <span>{date}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <BsPinAngle />
              <span>{location}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <BsPeople />
              <span>{attendees} interested</span>
            </div>
          </div>

          <div className="d-grid">
            <Button
              variant="outline-success"
              className="d-flex gap-2 align-items-center justify-content-center"
            >
              <BsHandThumbsUp className="text-outline-success" />
              <span>Interested</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
