import { Button } from "react-bootstrap";
import Search from "../../components/ui/Search";
import { BsPlusLg } from "react-icons/bs";
import EventCard from "../../components/event/EventCard";

const events = [
  { imageSrc: '/default-no-image.png', title: 'React Conference', date: 'Tue, Oct 10, 2020 at 10:00 AM', location: 'New York', attendees: 120 },
  { imageSrc: '/event-1.jpg', title: 'JavaScript Workshop', date: 'Wed, Nov 15, 2020 at 2:00 PM', location: 'Los Angeles', attendees: 45 },
  { imageSrc: '/event-2.jpg', title: 'AI Symposium', date: 'Thu, Dec 5, 2020 at 9:00 AM', location: 'Chicago', attendees: 200 },
  { imageSrc: '/default-no-image.png', title: 'Tech Meetup', date: 'Fri, Jan 20, 2021 at 6:00 PM', location: 'Austin', attendees: 85 },
];


function Events() {
  return (
    <div className="rounded p-3" style={{ backgroundColor: "var(--bs-light)" }}>
      <h3 className="mb-3">Discover Events</h3>
      <div className="d-flex flex-wrap gap-3 justify-content-between mb-4">
        <Search />
        <Button
          className="d-flex align-items-center gap-2"
          variant="outline-primary"
        >
          <BsPlusLg />
          <span>Create event</span>
        </Button>
      </div>

      <div className="row gap-3">
        {events.map((event, index) => (
          <EventCard
            key={index}
            imageSrc={event.imageSrc}
            title={event.title}
            date={event.date}
            location={event.location}
            attendees={event.attendees}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
