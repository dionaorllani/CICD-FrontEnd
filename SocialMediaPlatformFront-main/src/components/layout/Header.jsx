import { Container, Image } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import styles from "./Header.module.css";
import Sidebar from "./Sidebar";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import NotificationList from "../notification/NotificationList";
import {
  BsBell,
  BsChatLeftText,
  BsGear,
  BsList,
  BsMoonStars,
  BsPower,
  BsSun,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { theme, setDarkMode, setLightMode } = useTheme();
  const user = useSelector((state) => state.auth.user);

  console.log(user)

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

  return (
    <header className={`${styles.header} sticky-top`}>
      <Container>
        <div className=" d-flex align-items-center justify-content-md-between justify-content-center flex-wrap gap-1">
          <div className="d-flex flex-column flex-md-row  align-items-center">
            <Logo />
            <Search />
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className={`${styles.iconBox} p-0`}>
              <button
                className="btn d-block d-sm-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileSidebarToggler"
              >
                <BsList
                  className={`text-${theme === "light" ? "dark" : "light"}`}
                />
              </button>
            </span>
            <span className={`${styles.iconBox}`} data-bs-toggle="dropdown">
              <BsBell />
              <NotificationList notifications={notifications} theme={theme} />
            </span>
            <Link
              to="messages"
              className={`text-decoration-none text-${
                theme === "light" ? "dark" : "light"
              }`}
            >
              <span className={`${styles.iconBox}`}>
                <BsChatLeftText />
              </span>
            </Link>
            <Link
              to="settings"
              className={`text-decoration-none text-${
                theme === "light" ? "dark" : "light"
              }`}
            >
              <span className={`${styles.iconBox}`}>
                <BsGear />
              </span>
            </Link>
            <div className="dropdown">
              <Image
                style={{ cursor: "pointer" }}
                src={`/default-profile${theme === "dark" ? "-dark" : ""}.jpg`}
                width={50}
                roundedCircle
                data-bs-toggle="dropdown"
              />
              <div
                className={`dropdown-menu dropdown-menu-end ${
                  theme === "light" ? "" : "dropdown-menu-dark"
                }`}
              >
                <div className="p-2" style={{ width: "200px" }}>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <Image
                      src={`/default-profile${
                        theme === "dark" ? "-dark" : ""
                      }.jpg`}
                      width={50}
                      roundedCircle
                      data-bs-toggle="dropdown"
                    />
                    <div className="d-flex flex-column">
                      <span className="fw-bold d-inline-block">Sam Lanson</span>
                      <span
                        className="d-inline-block"
                        style={{ fontSize: "12px" }}
                      >
                        Web developer
                      </span>
                    </div>
                  </div>
                  <div className="d-grid mb-3">
                    <Link
                      to="/profile"
                      className="btn btn-outline-primary btn-sm btn-block"
                    >
                      View profile
                    </Link>
                  </div>

                  <div
                    className={`d-flex align-items-center mb-3 gap-2 justify-content-center border-top border-bottom py-1 ${
                      theme === "light" ? "text-dark" : "text-light"
                    }`}
                  >
                    <BsPower />

                    <Link
                      to="/login"
                      className={`text-decoration-none 
                        ${theme === "light" ? "text-dark" : "text-light"}`}
                    >
                      Sign Out
                    </Link>
                  </div>

                  <div className="text-center">
                    <span className="me-2">Mode:</span>
                    <div className="d-inline-flex gap-2">
                      <span
                        onClick={setLightMode}
                        className={`rounded ${styles.themModeIconBox} ${
                          theme === "light" ? "bg-primary text-light" : ""
                        }`}
                      >
                        <BsSun />
                      </span>
                      <span
                        onClick={setDarkMode}
                        className={`rounded ${styles.themModeIconBox} ${
                          theme === "dark" ? "bg-primary text-light" : ""
                        }`}
                      >
                        <BsMoonStars />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`offcanvas offcanvas-start ${
            theme === "light" ? "" : "text-bg-dark"
          }`}
          data-bs-scroll="true"
          tabIndex="-1"
          id="mobileSidebarToggler"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className={`btn-close ${
                theme === "light"
                  ? styles["btn-close-light"]
                  : styles["btn-close-dark"]
              }`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <Sidebar />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
