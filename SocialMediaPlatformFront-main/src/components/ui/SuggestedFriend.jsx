import { Button, Image } from "react-bootstrap";
import { useTheme } from "../../ThemeContext";
import { FaPlus } from "react-icons/fa";

function SuggestedFriend() {
  const { theme } = useTheme();

  return (
    <div className="d-flex align-items-center gap-1">
      <Image
        src={`./default-profile${theme === "light" ? "" : "-dark"}.jpg`}
        width={70}
        roundedCircle
      />
      <div>
        <h5 className="m-0">John Doe</h5>
        <p className="m-0" style={{ fontSize: "14px" }}>
          News anchor
        </p>
      </div>
      <Button
        variant="outline-primary"
        className="d-inline-flex ms-auto align-items-center rounded"
      >
        <FaPlus className="" />
      </Button>
    </div>
  );
}

export default SuggestedFriend;
