import { Button } from "react-bootstrap";
import {
  BsPlusLg,
} from "react-icons/bs";
import ProfileEvent from "../../components/profile/ProfileEvent";
import Search from "../../components/ui/Search";
import ProfileGroup from "../../components/profile/ProfileGroup";

function ProfileGroups() {
  return (
    <div className="p-3">
        <h4 className="mb-3">Groups</h4>
      <div className="d-flex flex-column gap-3 flex-md-row align-items-center justify-content-between">
        <Search />
        <Button
          className="d-flex align-items-center gap-2"
          variant="outline-primary"
        >
          <BsPlusLg />
          <span>Create group</span>
        </Button>
      </div>

      <div className="row gap-4 mt-4">
      <ProfileGroup />
      <ProfileGroup />
      </div>
    </div>
  );
}

export default ProfileGroups
