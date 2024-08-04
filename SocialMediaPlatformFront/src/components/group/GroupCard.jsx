import React from "react";
import { Image, Button } from "react-bootstrap";
import {
  BsCalendarCheck,
  BsPinAngle,
  BsPeople,
  BsHandThumbsUp,
  BsLock,
  BsGlobe2,
  BsShieldShaded,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

const GroupCard = ({ imageSrc, title, type, members }) => {
  const { theme } = useTheme();

  return (
    <div className="col-md-5 mx-auto">
      <div className="border rounded p-3">
        <Image
          src={imageSrc}
          fluid
          roundedCircle
          className="mx-auto d-block mb-4"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div className="border-top pt-3">
          <Link
            to="1"
            className={`text-decoration-none text-${
              theme === "light" ? "dark" : "light"
            }`}
          >
            <h5 className="mb-2">{title}</h5>
          </Link>

          <div className="d-flex flex-column gap-2 mb-4">
            <div className={`d-flex align-items-center gap-2`}>
              {type === "private" && (
                <>
                  <BsLock />
                  <span>Private Group</span>
                </>
              )}
              {type === "public" && (
                <>
                  <BsGlobe2 />
                  <span>Public Group</span>
                </>
              )}
            </div>

            <div className={`d-flex align-items-center gap-2`}>
              <BsPeople />
              <span>12.8K members</span>
            </div>

            <div className={`d-flex align-items-center gap-2`}>
              <BsShieldShaded />
              <span>Admin: John Doe</span>
            </div>
          </div>

          <div className="d-grid">
            <Button
              variant="outline-success"
              className="d-flex gap-2 align-items-center justify-content-center"
            >
              <BsHandThumbsUp className="text-outline-success" />
              <span>Join</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
