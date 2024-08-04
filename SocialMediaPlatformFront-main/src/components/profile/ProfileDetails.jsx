import { BsSuitcaseLg, BsPinAngle, BsCalendarCheck } from "react-icons/bs";


function ProfileDetails({ theme }) {
  return (
    <div className="px-4 d-flex flex-column flex-md-row gap-1 gap-md-4 align-items-center pb-3 border-bottom">
      <div
        className={`d-flex align-items-center gap-2 text-${theme === "light" ? "secondary" : "light"}`}
      >
        <BsSuitcaseLg />
        <span>Lead Developer</span>
      </div>

      <div
        className={`d-flex align-items-center gap-2 text-${theme === "light" ? "secondary" : "light"}`}
      >
        <BsPinAngle />
        <span>New Hampshire</span>
      </div>

      <div
        className={`d-flex align-items-center gap-2 text-${theme === "light" ? "secondary" : "light"}`}
      >
        <BsCalendarCheck />
        <span>Joined on Nov 26, 2019</span>
      </div>
    </div>
  );
}

export default ProfileDetails;
