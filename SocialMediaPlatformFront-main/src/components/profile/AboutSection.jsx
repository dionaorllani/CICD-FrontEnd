import { BsCalendarEvent, BsHeart, BsEnvelopeAt } from "react-icons/bs";
import styles from "../../styles/Profile.module.css";


import { useTheme } from "../../ThemeContext";

function AboutSection({ theme }) {
  return (
    <>
      <div className="p-3">
        <h4 className={`fw-bold text-${theme === "light" ? "dark" : "light"}`}>
          About
        </h4>
        <p className="lh-sm">
          I'd love to change the world, but they won’t give me the source code.
        </p>

        <div className="d-flex flex-column">
          <div className="d-flex align-items-center gap-2">
            <BsCalendarEvent />
            <span>
              Born: <span className="fw-bold">October 20, 1990</span>
            </span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <BsHeart />
            <span>
              Status: <span className="fw-bold">Single</span>
            </span>
          </div>

          <div className="d-flex flex-wrap align-items-center gap-2">
            <span>
              <BsEnvelopeAt className="me-2" />
              Email:
              <span className="fw-bold ms-1" style={{ wordBreak: "break-all" }}>
                webestica@gmail.com
              </span>
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "var(--bs-secondary)",
          width: "100%",
          height: "20px",
        }}
      ></div>
    </>
  );
}

export default AboutSection;
