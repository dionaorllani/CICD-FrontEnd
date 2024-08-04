import { Image } from "react-bootstrap";

import { useTheme } from "../../ThemeContext";
import { Link } from "react-router-dom";

function SidebarHeader() {
  const { theme } = useTheme();

  return (
    <header className="text-center">
      {theme && theme === "light" && (
        <Image src="/default-profile.jpg" roundedCircle width="150px" />
      )}
      {theme && theme === "dark" && (
        <Image
          src="/default-profile-dark.jpg"
          roundedCircle
          width="100px"
          className="mb-4"
        />
      )}
      <h4>
        <Link
          to="/profile"
          className={`text-decoration-none ${
            theme === "light" ? "text-dark" : "text-light"
          }`}
        >
          Sam Lanson
        </Link>
      </h4>
      <p className={`fw-semibold ${theme === "light" ? "text-muted" : ""}`}>
        Web Developer at Webestica
      </p>
      <p className={`${theme === "light" ? "text-muted" : ""}`}>
        I'd love to change the world, but they won’t give me the source code.
      </p>
      <div className="d-flex gap-1 border-bottom pb-3 flex-wrap mt-4 justify-content-center">
        <div className="d-flex flex-column gap-1 border-end pe-3">
          <span className="fw-bold">256</span>
          <span className={`${theme === "light" ? "text-muted" : ""}`}>
            Posts
          </span>
        </div>
        <div className="d-flex flex-column gap-1 border-end pe-3">
          <span className="fw-bold">2.5K</span>
          <span className={`${theme === "light" ? "text-muted" : ""}`}>
            Followers
          </span>
        </div>
        <div className="d-flex flex-column gap-1 pe-0">
          <span className="fw-bold">365</span>
          <span className={`${theme === "light" ? "text-muted" : ""}`}>
            Following
          </span>
        </div>
      </div>
    </header>
  );
}

export default SidebarHeader;
