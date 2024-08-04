import Notification from "../../components/notification/Notification";

const notifications = [
  {
    type: "friend_request",
    user: "John Doe",
    time: "Just now",
    onAccept: () => {},
    onDelete: () => {},
  },
  { type: "like", user: "John Doe", time: "2 min" },
  { type: "share", user: "John Doe", time: "2 min" },
  { type: "comment", user: "John Doe", time: "2 min" },
  { type: "like", user: "John Doe", time: "2 min", isRead: true },
  { type: "birthday", user: "John Doe", time: "2 min", isRead: true },
  // Add more notifications here
];

function Notifications() {
  return (
    <div className="rounded p-3" style={{ backgroundColor: "var(--bs-light)" }}>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <h4>Notifications</h4>
        <button className="btn btn-link text-decoration-none">
          Mark All As Read
        </button>
      </div>
      <div className="d-flex flex-column gap-1 mt-3 border-bottom ">
        {notifications.map((notification, index) => (
          <Notification key={index} {...notification} />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
