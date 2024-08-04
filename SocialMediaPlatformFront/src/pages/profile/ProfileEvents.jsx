import { Button } from "react-bootstrap";
import {
  BsPlusLg,
} from "react-icons/bs";
import ProfileEvent from "../../components/profile/ProfileEvent";
import Search from "../../components/ui/Search";

function ProfileEvents() {
  return (
    <div className="p-3">
        <h4 className="mb-3">Events</h4>
      <div className="d-flex flex-column gap-3 flex-md-row align-items-center justify-content-between">
        <Search />
        <Button
          className="d-flex align-items-center gap-2"
          variant="outline-primary"
        >
          <BsPlusLg />
          <span>Create event</span>
        </Button>
      </div>

      <div className="row gap-4 mt-4">
        <ProfileEvent />
        <ProfileEvent />
      </div>
    </div>
  );
}

export default ProfileEvents;
