import { Button, Image } from "react-bootstrap";
import styles from "./SingleEvent.module.css";
import {
  BsCalendarCheck,
  BsHandThumbsUp,
  BsPeople,
  BsPinAngle,
} from "react-icons/bs";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import marker images
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function SingleEvent() {
  // Coordinates for New York
  const position = [40.7128, -74.006];

  return (
    <div className="rounded">
      <div className={styles.eventImgBox}>
        <Image
          src="/event-2.jpg"
          fluid
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />

        <div
          className={`${styles.eventTitle} text-light d-flex align-items-center justify-content-between px-3`}
        >
          <h4>JavaScript Workshop</h4>
          <Button
            variant="outline-success"
            className="d-flex gap-2 align-items-center justify-content-center"
          >
            <BsHandThumbsUp className="text-light" />
            <span className="text-light">Interested</span>
          </Button>
        </div>
        <div
          className={`${styles.eventDateBox} text-center rounded`}
          style={{ backgroundColor: "var(--bs-light)" }}
        >
          <p className={`bg-primary text-light p-2 fw-semibold mb-1 text-wrap`}>
            Sunday
          </p>
          <p className="mb-0 fw-semibold">Dec 08</p>
        </div>
      </div>

      <div
        className="mt-4 rounded p-3"
        style={{ backgroundColor: "var(--bs-light)" }}
      >
        <h5 className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit at
          ducimus eos rem ullam voluptas vero dicta sint laudantium nam,
          veritatis, et tempora quod iste dolore cupiditate ipsum. Deleniti,
          sunt.
        </h5>

        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 border-top pt-4 fs-4">
          <div className="d-flex align-items-center gap-2">
            <BsCalendarCheck />
            <span className="fw-bold">Tue, Oct 10, 2020 at 10:00 AM</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <BsPinAngle />
            <span className="fw-bold">New York</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <BsPeople />
            <span className="fw-bold">120 interested</span>
          </div>
        </div>

        <div className="mt-4">
          <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                JavaScript Workshop location
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default SingleEvent;
