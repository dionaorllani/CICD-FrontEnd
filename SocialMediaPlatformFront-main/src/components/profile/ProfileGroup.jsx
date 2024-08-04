import { Image, Button } from "react-bootstrap";
import {
  BsCalendarCheck,
  BsPeople,
  BsPinAngle,
  BsShieldShaded,
  BsChatDots,
  BsLock,
  BsGlobe2,
} from "react-icons/bs";

const EventInfo = ({ icon: Icon, text }) => (
  <div className="d-flex align-items-center gap-2">
    <Icon />
    <span>{text}</span>
  </div>
);

function ProfileGroup() {
  return (
    <div className="col-12 d-flex align-items-center gap-3 flex-wrap border-bottom pb-2">
      <Image src="/event-2.jpg" fluid width={100} />
      <div>
        <div className="d-flex flex-column">
          <h5>Apple fan boys</h5>
          <div className="d-flex flex-wrap gap-4">
            <div className={`d-flex align-items-center gap-2`}>
              <BsShieldShaded />
              <span>Admin: John Doe</span>
            </div>

            <div className={`d-flex align-items-center gap-2`}>
              {/* <BsGlobe2 /> */}
              <BsLock  />
              <span>Private</span>
            </div>

            <div className={`d-flex align-items-center gap-2`}>
              <BsPeople />
              <span>12.8K members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileGroup;

