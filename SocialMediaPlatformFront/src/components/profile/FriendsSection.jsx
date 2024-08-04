import { Link } from "react-router-dom";

import Friend from "./Friend";

function FriendsSection({ theme }) {
  return (
    <div className="p-3 rounded">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-baseline gap-1">
          <h4
            className={`fw-bold text-${theme === "light" ? "dark" : "light"}`}
          >
            Friends
          </h4>
          <span className="px-2 bg-success text-light rounded">230</span>
        </div>
        <Link to="friends" className="btn btn-primary btn-sm">
          See All
        </Link>
      </div>

      <div
        className={`row gap-2  py-2 text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
}

export default FriendsSection;
