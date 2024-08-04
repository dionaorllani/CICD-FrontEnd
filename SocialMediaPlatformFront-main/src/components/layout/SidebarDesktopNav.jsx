import styles from "./SidebarDesktopNav.module.css";

import {
  BsHouseDoor,
  BsCalendar3,
  BsGlobe2,
  BsBell,
  BsGear,
  BsPerson,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

function SidebarDesktopNav() {
  return (
    <nav className="mt-4">
      <ul className={`${styles.navUl}`}>
        <li>
          <NavLink to="home">
            <BsHouseDoor /> <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="profile">
            <BsPerson /> <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="events">
            <BsCalendar3 /> <span>Events</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="groups">
            <BsGlobe2 /> <span>Groups</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="notifications">
            <BsBell /> <span>Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="settings">
            <BsGear /> <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarDesktopNav;
