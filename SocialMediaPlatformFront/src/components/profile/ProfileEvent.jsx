import { Image } from "react-bootstrap";
import { BsCalendarCheck, BsPeople, BsPinAngle } from "react-icons/bs";

function ProfileEvent() {
  return (
    <div className="col-12 d-flex align-items-center gap-3 flex-wrap border-bottom pb-2">
      <Image src="/event-1.jpg" fluid width={100} />
      <div>
        <div className="d-flex flex-column">
          <h5>Comedy on the green</h5>
          <div className="d-flex flex-wrap gap-4">
            <div className={`d-flex align-items-center gap-2`}>
              <BsCalendarCheck />
              <span> Mon, Sep 25, 2020 at 9:30 AM</span>
            </div>

            <div className={`d-flex align-items-center gap-2`}>
              <BsPinAngle />
              <span> San francisco</span>
            </div>

            <div className={`d-flex align-items-center gap-2`}>
              <BsPeople />
              <span>77 going</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEvent;
