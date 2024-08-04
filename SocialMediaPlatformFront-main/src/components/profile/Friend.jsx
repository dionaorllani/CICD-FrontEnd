import { Button, Image } from "react-bootstrap";
import { BsChatLeftText, BsPersonX, BsPersonPlus } from "react-icons/bs";

function Friend({ col = 'col-5', relationshipType }) {
 

  const getButtonVariant = () => {
    switch (relationshipType) {
      case 'friend':
        return 'danger';
      case 'following':
        return 'primary';
      case 'follower':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  return (
    <div className={`${col} mx-auto p-1 text-break text-center`}>
      <Image src="/friend-1.jpg" roundedCircle width={60} className="mb-2" />
      <h6 className="fw-bold">Amanda Reed</h6>
      <div className="d-flex justify-content-center gap-1">
        <Button size="sm">
          <BsChatLeftText />
        </Button>
        <Button variant={getButtonVariant()} size="sm">
          <BsPersonX />
        </Button>
      </div>
    </div>
  );
}

export default Friend;
