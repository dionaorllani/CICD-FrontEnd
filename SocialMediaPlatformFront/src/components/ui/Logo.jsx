import { Image } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import { Link } from "react-router-dom";

function Logo({ width = 200 }) {
  const { theme } = useTheme();
  return (
    <>
      {/* {theme === "light" && <Image src="./logo.png" width={width} />}
      {theme === "dark" && <Image src="./logo-dark.png" width={width} />} */}
      <Link
        to="/home"
        className={`me-4 fs-2 fw-semibold text-decoration-none text-${
          theme === "light" ? "dark" : "light"
        }`}
        
      >
        NETWORKY
      </Link>
    </>
  );
}

export default Logo;
