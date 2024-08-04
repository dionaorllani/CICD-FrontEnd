import { Image } from "react-bootstrap";
import styles from "./Notification.module.css";
import { useTheme } from "../../ThemeContext";

const Notification = ({ type, user, time, isRead, onAccept, onDelete }) => {
  const { theme } = useTheme();

  const getMessage = () => {
    switch (type) {
      case "friend_request":
        return `${user} sent you a friend request.`;
      case "like":
        return `${user} liked your post.`;
      case "comment":
        return `${user} commented on your post.`;
      case "share":
        return `${user} shared your post.`;
      case "birthday":
        return `It's ${user}'s birthday today.`;
      default:
        return "";
    }
  };

  return (
    <div
      className={`${styles.notification} d-flex align-items-start gap-2 p-2 ${
        isRead ? "" : "new"
      }`}
    >
      <Image
        src={`/default-profile${theme === "light" ? "" : "-dark"}.jpg`}
        roundedCircle
        width={65}
      />
      <div>
        <p>{getMessage()}</p>
        {type === "friend_request" && (
          <>
            <button className="btn btn-sm btn-primary me-1" onClick={onAccept}>
              Accept
            </button>
            <button className="btn btn-sm btn-danger" onClick={onDelete}>
              Delete
            </button>
          </>
        )}
      </div>
      <time className="ms-auto">{time}</time>
    </div>
  );
};

export default Notification;
