import { Button, Image } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import styles from "../../styles/Profile.module.css";


import { useTheme } from "../../ThemeContext";

function ProfileHeader({ theme }) {
  return (
    <>
      <div style={{ height: "200px" }}>
        <Image
          src="/profile-cover-img.jpg"
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <div
        className="d-flex flex-column flex-md-row align-items-center gap-1 gap-md-3 px-4"
        style={{ transform: "translateY(-25%)" }}
      >
        <Image
          src={`/default-profile${theme === "light" ? "" : "-dark"}.jpg`}
          roundedCircle
          width={120}
          className="border border-2"
        />

        <div className="align-self-md-end">
          <h4 className="mb-1">Sam Lanson</h4>
          <p className={`text-${theme === "light" ? "secondary" : "light"}`}>
            250 friends
          </p>
        </div>

        <div className="ms-md-auto mt-md-4">
          <Button
            variant="outline-primary"
            className="d-flex align-items-center gap-2"
          >
            <BsPencilSquare />
            <span>Edit Profile</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
