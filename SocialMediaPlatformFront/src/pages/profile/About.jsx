import {
  BsCalendarCheck,
  BsCalendarEvent,
  BsEnvelopeAt,
  BsHeart,
  BsPinAngle,
  BsSuitcaseLg,
} from "react-icons/bs";
import { useTheme } from "../../ThemeContext";

function About() {
  const { theme } = useTheme();

  return (
    <div className="p-3">
      <h4>Profile Info</h4>

      <div className="border p-3">
        <h5 className="fw-bold">Bio</h5>
        <p>
          I'd love to change the world, but they won’t give me the source code.
        </p>
      </div>

      <div class="row gap-4 p-3 ">
        <div class="col-sm-5 border p-3">
          <div className="d-flex align-items-center gap-2">
            <BsCalendarEvent />
            <span>
              Born: <span className="fw-bold text-break">October 20, 1990</span>
            </span>
          </div>
        </div>
        <div class="col-sm-5 border p-3">
          <div className="d-flex align-items-center gap-2">
            <BsHeart />
            <span>
              Status: <span className="fw-bold text-break">Single</span>
            </span>
          </div>
        </div>

        <div class="col-sm-5 border p-3">
          <div className={`d-flex align-items-center gap-2`}>
            <BsSuitcaseLg />
            <span>
              Job: <span className="fw-bold text-break">Lead Developer</span>
            </span>
          </div>
        </div>

        <div class="col-sm-5 border p-3">
          <div className={`d-flex align-items-center gap-2`}>
            <BsPinAngle />
            <span>
              Located: <span className="fw-bold text-break">New Hampshire</span>
            </span>
          </div>
        </div>

        <div class="col-sm-5 border p-3">
          <div className={`d-flex align-items-center gap-2`}>
            <BsCalendarCheck />
            <span>
              Joined: <span className="fw-bold text-break">Nov 26, 2019</span>
            </span>
          </div>
        </div>

        <div class="col-sm-5 border p-3">
          <div className={`d-flex align-items-center gap-2`}>
            <BsEnvelopeAt />
            <span>
              Email: <span className="fw-bold text-break">webestica@gmail.com</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
