import { Button } from "react-bootstrap";
import styles from "./RightSidebar.module.css";
import SuggestedFriend from "../ui/SuggestedFriend";

function RightSidebar() {

  return (
    <aside className={styles.aside}>
      <h4 className="mb-2">Who to follow</h4>
      <div className="d-flex flex-column gap-1 mb-2">
        <SuggestedFriend />
        <SuggestedFriend />
        <SuggestedFriend />
        <SuggestedFriend />
        <SuggestedFriend />
        <SuggestedFriend />
      </div>
      <div className="d-grid">
      <Button variant="outline-primary" size="sm">View More</Button>
      </div>
    </aside>
  );
}

export default RightSidebar;
