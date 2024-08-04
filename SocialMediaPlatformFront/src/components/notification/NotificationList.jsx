import { useNavigate } from "react-router-dom";
import Notification from "./Notification";
import styles from "./NotificationList.module.css";

const NotificationList = ({ notifications, theme }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/notifications");
  };

  return (
    <div
      className={`dropdown-menu dropdown-menu-end ${styles.dropDownMenu} ${
        theme === "light" ? "" : "dropdown-menu-dark"
      }`}
    >
      <div className="d-flex align-items-center gap-2 border-bottom pb-2">
        <span className="fw-semibold">Notifications</span>
        <span className="badge rounded-pill text-bg-danger">4 new</span>
        <button className="btn btn-link text-decoration-none ms-auto">
          Mark All Read
        </button>
      </div>
      <div className="d-flex flex-column gap-1 mt-3 border-bottom">
        {notifications.map((notification, index) => (
          <Notification key={index} {...notification} />
        ))}
      </div>
      <div className="mt-3 text-center">
        <a href="/notifications" onClick={handleClick} className="btn btn-primary">
          See all notifications
        </a>
      </div>
    </div>
  );
};

export default NotificationList;
