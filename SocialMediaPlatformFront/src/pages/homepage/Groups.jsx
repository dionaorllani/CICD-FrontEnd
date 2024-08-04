import { Button } from "react-bootstrap";
import Search from "../../components/ui/Search";
import { BsPlusLg } from "react-icons/bs";
import GroupCard from "../../components/group/GroupCard";

const events = [
  {
    imageSrc: "/group-3.svg",
    title: "React Conference",
    type: "public",
    members: 120,
  },
  {
    imageSrc: "/group-1.svg",
    title: "JavaScript Workshop",
    type: "private",
    members: 45,
  },
  {
    imageSrc: "/group-2.svg",
    title: "AI Symposium",
    type: "public",
    members: 200,
  },
  {
    imageSrc: "/default-no-image.png",
    title: "Tech Meetup",
    type: "public",
    members: 85,
  },
];

function Groups() {
  return (
    <div className="rounded p-3" style={{ backgroundColor: "var(--bs-light)" }}>
      <h3 className="mb-3">Discover Groups</h3>
      <div className="d-flex flex-wrap gap-3 justify-content-between mb-4">
        <Search />
        <Button
          className="d-flex align-items-center gap-2"
          variant="outline-primary"
        >
          <BsPlusLg />
          <span>Create group</span>
        </Button>
      </div>

      <div className="row gap-3">
        {events.map((event, index) => (
          <GroupCard
            key={index}
            imageSrc={event.imageSrc}
            title={event.title}
            type={event.type}
            members={event.members}
          />
        ))}
      </div>
    </div>
  );
}

export default Groups;
