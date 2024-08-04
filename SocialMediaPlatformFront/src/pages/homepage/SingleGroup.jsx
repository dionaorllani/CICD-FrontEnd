import { Button, Image } from "react-bootstrap";
import { BsDot, BsPersonCheck } from "react-icons/bs";
import CreatePost from "../../components/ui/CreatePost";
import posts from "../../fake-data";
import Post from "../../components/post/Post";

function SingleGroup() {
  return (
    <>
      <div
        className="p-3 rounded mb-4"
        style={{ backgroundColor: "var(--bs-light)" }}
      >
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <Image src="/group-1.svg" width={100} fluid />
          <div>
            <h4>Apple fan boys</h4>
            <span>Private</span> group <BsDot /> 28.3K members
          </div>

          <Button
            className="d-flex align-items-center gap-2 ms-md-auto"
            variant="outline-success"
            disabled
          >
            <BsPersonCheck />
            Joined
          </Button>
        </div>
      </div>

      {true && (
        <>
          <div
            className="p-3 mb-4 rounded"
            style={{ backgroundColor: "var(--bs-light)" }}
          >
            <CreatePost />
          </div>

          <div
            className="p-3 rounded"
            style={{ backgroundColor: "var(--bs-light)" }}
          >
            {posts.map((post, index) => (
              <Post key={index} {...post} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default SingleGroup;
