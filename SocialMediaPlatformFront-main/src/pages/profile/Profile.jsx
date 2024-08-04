import styles from "../../styles/Profile.module.css";
import { useTheme } from "../../ThemeContext";
import { NavLink, Outlet } from "react-router-dom";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileDetails from "../../components/profile/ProfileDetails";
import AboutSection from "../../components/profile/AboutSection";
import GallerySection from "../../components/profile/GallerySection";
import FriendsSection from "../../components/profile/FriendsSection";

function Profile() {
  const { theme } = useTheme();

  return (
    <div className={`${styles.profileContainer} rounded`}>
      <div className={`${styles.profileBox} rounded`}>
        <ProfileHeader theme={theme} />

        <ProfileDetails theme={theme} />

        <div className="d-flex flex-wrap align-items-center justify-content-md-start justify-content-center  gap-3 px-4 py-2">
          <NavLink
            className={`${styles.navLink} text-${
              theme === "light" ? "dark" : "light"
            }`}
            to=""
            end
          >
            Posts
          </NavLink>
          <NavLink
            className={`${styles.navLink} text-${
              theme === "light" ? "dark" : "light"
            }`}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={`${styles.navLink} text-${
              theme === "light" ? "dark" : "light"
            }`}
            to="friends"
          >
            Friends
          </NavLink>
          <NavLink
            className={`${styles.navLink} text-${
              theme === "light" ? "dark" : "light"
            }`}
            to="followers"
          >
            Follwers
          </NavLink>
          <NavLink
            className={`${styles.navLink} text-${
              theme === "light" ? "dark" : "light"
            }`}
            to="following"
          >
            Following
          </NavLink>
          <NavLink
            className={`${styles.navLink} text-${
              theme === "light" ? "dark" : "light"
            }`}
            to="photos"
          >
            Photos
          </NavLink>
          <NavLink
            className={`${styles.navLink} text-${
              theme === "light" ? "dark" : "light"
            }`}
            to="videos"
          >
            Videos
          </NavLink>
          <NavLink
            className={`${styles.navLink} text-${
              theme === "light" ? "dark" : "light"
            }`}
            to="events"
          >
            Events
          </NavLink>
          <NavLink
            className={`${styles.navLink} text-${
              theme === "light" ? "dark" : "light"
            }`}
            to="groups"
          >
            Groups
          </NavLink>
        </div>

        <div
          style={{
            backgroundColor: "var(--bs-secondary)",
            width: "100%",
            height: "20px",
          }}
        ></div>

        <div>
          <Outlet />
        </div>
      </div>

      <div
        className={`${styles.aboutBox} rounded text-${
          theme === "light" ? "secondary" : "light"
        }`}
      >
        <AboutSection theme={theme} />

        <GallerySection theme={theme} />

        <FriendsSection theme={theme} />
      </div>
    </div>
  );
}

export default Profile;
